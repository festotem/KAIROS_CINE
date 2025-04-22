import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET /api/colaboradores - Listar todos os colaboradores
export async function GET() {
  try {
    const colaboradores = await prisma.colaborador.findMany({
      orderBy: {
        nome_completo: 'asc'
      }
    });
    
    return NextResponse.json(colaboradores);
  } catch (error) {
    console.error('Erro ao buscar colaboradores:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar colaboradores' },
      { status: 500 }
    );
  }
}

// POST /api/colaboradores - Criar um novo colaborador
export async function POST(request) {
  try {
    const data = await request.json();
    
    const colaborador = await prisma.colaborador.create({
      data
    });
    
    return NextResponse.json(colaborador, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar colaborador:', error);
    return NextResponse.json(
      { error: 'Erro ao criar colaborador' },
      { status: 500 }
    );
  }
}
