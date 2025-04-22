import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

// Mock do Next.js Link
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, className }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

test('Home page renders correctly', () => {
  render(<Home />);
  
  // Verifica se o título principal está presente
  expect(screen.getByText('Gestão Audiovisual')).toBeDefined();
  
  // Verifica se os cards das seções principais estão presentes
  expect(screen.getByText('Clientes')).toBeDefined();
  expect(screen.getByText('Colaboradores')).toBeDefined();
  expect(screen.getByText('Orçamentos')).toBeDefined();
  expect(screen.getByText('Cronogramas')).toBeDefined();
  
  // Verifica se os links para as seções estão presentes
  const links = screen.getAllByRole('link');
  const hrefs = links.map(link => link.getAttribute('href'));
  
  expect(hrefs).toContain('/clientes');
  expect(hrefs).toContain('/colaboradores');
  expect(hrefs).toContain('/orcamentos');
  expect(hrefs).toContain('/cronogramas');
});
