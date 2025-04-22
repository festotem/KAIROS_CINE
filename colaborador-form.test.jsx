import { expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ColaboradorForm from '../src/app/(dashboard)/colaboradores/novo/page';

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

test('Colaborador form renders correctly', () => {
  render(<ColaboradorForm />);
  
  // Verifica se o título do formulário está presente
  expect(screen.getByText('Cadastro de Colaborador')).toBeDefined();
  
  // Verifica se os campos obrigatórios estão presentes
  expect(screen.getByLabelText('Função')).toBeDefined();
  expect(screen.getByLabelText('Nome Completo')).toBeDefined();
  expect(screen.getByLabelText('Telefone Celular')).toBeDefined();
  expect(screen.getByLabelText('E-mail')).toBeDefined();
  
  // Verifica se as seções do formulário estão presentes
  expect(screen.getByText('Dados Empresariais')).toBeDefined();
  expect(screen.getByText('Representante Legal')).toBeDefined();
  expect(screen.getByText('Dados Bancários')).toBeDefined();
  
  // Verifica se os botões estão presentes
  expect(screen.getByText('Cancelar')).toBeDefined();
  expect(screen.getByText('Salvar')).toBeDefined();
});
