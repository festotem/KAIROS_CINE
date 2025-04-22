import './globals.css';

export const metadata = {
  title: 'Aplicativo de Gestão Audiovisual',
  description: 'Sistema para cadastro de clientes, colaboradores, orçamentos e cronogramas de projetos audiovisuais',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}
