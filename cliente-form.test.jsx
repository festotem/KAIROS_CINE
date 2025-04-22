import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ClienteForm from '../src/app/(dashboard)/clientes/novo/page';

// Mock do Next.js Link e useForm
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, className }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

vi.mock('react-hook-form', () => ({
  useForm: () => ({
    register: () => ({}),
    handleSubmit: (cb) => (data) => cb(data),
    formState: { errors: {} }
  })
}));

test('Cliente form renders correctly', () => {
  render(<ClienteForm />);
  
  // Verifica se o título do formulário está presente
  expect(screen.getByText('Cadastro de Cliente/Projeto')).toBeDefined();
  
  // Verifica se os campos obrigatórios estão presentes
  expect(screen.getByLabelText('Título do Projeto')).toBeDefined();
  expect(screen.getByLabelText('Produtora')).toBeDefined();
  expect(screen.getByLabelText('Nome do Contato')).toBeDefined();
  expect(screen.getByLabelText('Telefone do Contato')).toBeDefined();
  expect(screen.getByLabelText('Email do Contato')).toBeDefined();
  expect(screen.getByLabelText('Formato')).toBeDefined();
  
  // Verifica se a seção de especificações técnicas está presente
  expect(screen.getByText('Especificações Técnicas')).toBeDefined();
  
  // Verifica se os botões estão presentes
  expect(screen.getByText('Cancelar')).toBeDefined();
  expect(screen.getByText('Salvar')).toBeDefined();
});
