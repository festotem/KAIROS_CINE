# README.md - Aplicativo de Gestão Audiovisual

Este repositório contém um aplicativo web completo para gerenciamento de projetos audiovisuais, incluindo cadastro de clientes, colaboradores, orçamentos e cronogramas.

## Tecnologias Utilizadas

- **Frontend**: Next.js, React, Tailwind CSS, React Hook Form
- **Backend**: API Routes do Next.js, Prisma ORM
- **Banco de Dados**: PostgreSQL
- **Testes**: Vitest, React Testing Library

## Estrutura do Projeto

```
projeto_audiovisual/
├── prisma/                  # Configuração do Prisma ORM
│   └── schema.prisma        # Esquema do banco de dados
├── src/
│   ├── app/                 # Páginas do Next.js App Router
│   │   ├── (dashboard)/     # Layout e páginas do dashboard
│   │   │   ├── clientes/    # Páginas de clientes
│   │   │   ├── colaboradores/ # Páginas de colaboradores
│   │   │   ├── orcamentos/  # Páginas de orçamentos
│   │   │   └── cronogramas/ # Páginas de cronogramas
│   │   ├── api/             # API Routes do Next.js
│   │   ├── globals.css      # Estilos globais
│   │   ├── layout.jsx       # Layout principal
│   │   └── page.jsx         # Página inicial
│   ├── components/          # Componentes React reutilizáveis
│   ├── lib/                 # Bibliotecas e utilitários
│   └── utils/               # Funções utilitárias
├── tests/                   # Testes automatizados
├── .env                     # Variáveis de ambiente (local)
├── .gitignore               # Arquivos ignorados pelo Git
├── DEPLOYMENT.md            # Guia de implantação
├── USER_GUIDE.md            # Guia do usuário
├── package.json             # Dependências e scripts
├── postcss.config.js        # Configuração do PostCSS
├── tailwind.config.js       # Configuração do Tailwind CSS
└── vercel.json              # Configuração de implantação na Vercel
```

## Funcionalidades

### Clientes
- Cadastro completo de clientes e projetos
- Gerenciamento de informações de contato
- Especificações técnicas dos projetos

### Colaboradores
- Cadastro detalhado de colaboradores
- Informações pessoais e profissionais
- Dados bancários e contratuais

### Orçamentos
- Criação de orçamentos detalhados
- Categorização de itens de orçamento
- Cálculo automático de valores

### Cronogramas
- Planejamento de cronogramas de produção
- Atribuição de responsáveis por tarefas
- Acompanhamento de progresso

## Documentação

- [Guia do Usuário](USER_GUIDE.md): Instruções de uso para usuários finais
- [Guia de Implantação](DEPLOYMENT.md): Instruções para implantar o aplicativo
- [Requisitos do Aplicativo](requisitos_aplicativo.md): Documentação dos requisitos

## Começando

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`
4. Execute as migrações do banco de dados: `npx prisma migrate dev`
5. Inicie o servidor de desenvolvimento: `npm run dev`

## Implantação

O aplicativo está configurado para implantação na Vercel. Consulte o [Guia de Implantação](DEPLOYMENT.md) para instruções detalhadas.

## Licença

Este projeto está licenciado sob a licença ISC.
