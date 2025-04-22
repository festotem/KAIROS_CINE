import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NextResponse } from 'next/server';
import { GET, POST } from '../src/app/api/orcamentos/route';

// Mock do Prisma
vi.mock('@/lib/prisma', () => ({
  default: {
    orcamento: {
      findMany: vi.fn(),
      create: vi.fn()
    },
    itemOrcamento: {
      create: vi.fn()
    },
    $transaction: vi.fn((callback) => callback(prisma))
  }
}));

// Mock do NextResponse
vi.mock('next/server', () => ({
  NextResponse: {
    json: vi.fn()
  }
}));

import prisma from '@/lib/prisma';

test('GET /api/orcamentos retorna lista de orçamentos', async () => {
  // Mock dos dados de retorno
  const mockOrcamentos = [
    { 
      id: '1', 
      projeto_id: '1',
      data_orcamento: new Date(),
      valor_total: 450000,
      status: 'Aprovado',
      projeto: { titulo: 'Reality Show', produtora: 'Floresta Produções' }
    },
    { 
      id: '2', 
      projeto_id: '2',
      data_orcamento: new Date(),
      valor_total: 280000,
      status: 'Em análise',
      projeto: { titulo: 'Documentário Natureza', produtora: 'Verde Filmes' }
    }
  ];
  
  // Configura o mock para retornar os dados
  prisma.orcamento.findMany.mockResolvedValue(mockOrcamentos);
  NextResponse.json.mockReturnValue({ data: mockOrcamentos });
  
  // Chama a função GET
  await GET();
  
  // Verifica se o Prisma foi chamado corretamente
  expect(prisma.orcamento.findMany).toHaveBeenCalledWith({
    include: {
      projeto: {
        select: {
          titulo: true,
          produtora: true
        }
      }
    },
    orderBy: {
      data_orcamento: 'desc'
    }
  });
  
  // Verifica se o NextResponse.json foi chamado com os dados corretos
  expect(NextResponse.json).toHaveBeenCalledWith(mockOrcamentos);
});

test('POST /api/orcamentos cria um novo orçamento com itens', async () => {
  // Mock dos dados de entrada
  const mockOrcamentoData = {
    projeto_id: '1',
    data_orcamento: new Date(),
    status: 'Rascunho',
    itens: [
      {
        categoria_id: '1',
        codigo: '01-01',
        descricao: 'Conversão OCF / Editorial',
        multiplicador: 1,
        quantidade: 10,
        unidade: 'hr/material',
        valor_unitario: 40
      },
      {
        categoria_id: '1',
        codigo: '01-10',
        descricao: 'IQC (Checagem de OCF)',
        multiplicador: 1,
        quantidade: 5,
        unidade: 'hr/material',
        valor_unitario: 20.3
      }
    ]
  };
  
  // Valor total esperado: (1 * 10 * 40) + (1 * 5 * 20.3) = 400 + 101.5 = 501.5
  const valorTotalEsperado = 501.5;
  
  // Mock do orçamento criado
  const mockOrcamentoCriado = {
    id: '3',
    projeto_id: mockOrcamentoData.projeto_id,
    data_orcamento: mockOrcamentoData.data_orcamento,
    status: mockOrcamentoData.status,
    valor_total: valorTotalEsperado,
    data_criacao: new Date(),
    data_atualizacao: new Date()
  };
  
  // Configura os mocks
  prisma.orcamento.create.mockResolvedValue(mockOrcamentoCriado);
  prisma.$transaction.mockImplementation(async (callback) => {
    return await callback(prisma);
  });
  NextResponse.json.mockReturnValue({ data: mockOrcamentoCriado, status: 201 });
  
  // Mock da requisição
  const request = {
    json: vi.fn().mockResolvedValue(mockOrcamentoData)
  };
  
  // Chama a função POST
  await POST(request);
  
  // Verifica se o request.json foi chamado
  expect(request.json).toHaveBeenCalled();
  
  // Verifica se a transação do Prisma foi chamada
  expect(prisma.$transaction).toHaveBeenCalled();
  
  // Verifica se o orçamento foi criado com o valor total correto
  expect(prisma.orcamento.create).toHaveBeenCalledWith({
    data: {
      projeto_id: mockOrcamentoData.projeto_id,
      data_orcamento: mockOrcamentoData.data_orcamento,
      status: mockOrcamentoData.status,
      valor_total: valorTotalEsperado
    }
  });
  
  // Verifica se o NextResponse.json foi chamado com os dados corretos
  expect(NextResponse.json).toHaveBeenCalledWith(mockOrcamentoCriado, { status: 201 });
});
