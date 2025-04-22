import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NextResponse } from 'next/server';
import { GET, POST } from '../src/app/api/colaboradores/route';

// Mock do Prisma
vi.mock('@/lib/prisma', () => ({
  default: {
    colaborador: {
      findMany: vi.fn(),
      create: vi.fn()
    }
  }
}));

// Mock do NextResponse
vi.mock('next/server', () => ({
  NextResponse: {
    json: vi.fn()
  }
}));

import prisma from '@/lib/prisma';

test('GET /api/colaboradores retorna lista de colaboradores', async () => {
  // Mock dos dados de retorno
  const mockColaboradores = [
    { id: '1', nome_completo: 'Ana Silva', funcao: 'Diretora de Fotografia' },
    { id: '2', nome_completo: 'Carlos Mendes', funcao: 'Editor de Vídeo' }
  ];
  
  // Configura o mock para retornar os dados
  prisma.colaborador.findMany.mockResolvedValue(mockColaboradores);
  NextResponse.json.mockReturnValue({ data: mockColaboradores });
  
  // Chama a função GET
  await GET();
  
  // Verifica se o Prisma foi chamado corretamente
  expect(prisma.colaborador.findMany).toHaveBeenCalledWith({
    orderBy: { nome_completo: 'asc' }
  });
  
  // Verifica se o NextResponse.json foi chamado com os dados corretos
  expect(NextResponse.json).toHaveBeenCalledWith(mockColaboradores);
});

test('POST /api/colaboradores cria um novo colaborador', async () => {
  // Mock dos dados de entrada e retorno
  const mockColaboradorData = {
    nome_completo: 'Novo Colaborador',
    funcao: 'Produtor',
    telefone_celular: '(11) 98765-4321',
    email: 'novo@exemplo.com'
  };
  
  const mockColaboradorCriado = {
    id: '3',
    ...mockColaboradorData,
    data_criacao: new Date(),
    data_atualizacao: new Date()
  };
  
  // Configura o mock para retornar os dados
  prisma.colaborador.create.mockResolvedValue(mockColaboradorCriado);
  NextResponse.json.mockReturnValue({ data: mockColaboradorCriado, status: 201 });
  
  // Mock da requisição
  const request = {
    json: vi.fn().mockResolvedValue(mockColaboradorData)
  };
  
  // Chama a função POST
  await POST(request);
  
  // Verifica se o request.json foi chamado
  expect(request.json).toHaveBeenCalled();
  
  // Verifica se o Prisma foi chamado corretamente
  expect(prisma.colaborador.create).toHaveBeenCalledWith({
    data: mockColaboradorData
  });
  
  // Verifica se o NextResponse.json foi chamado com os dados corretos
  expect(NextResponse.json).toHaveBeenCalledWith(mockColaboradorCriado, { status: 201 });
});
