# Guia de Implantação

Este documento descreve os passos necessários para implantar o aplicativo web de gestão audiovisual em um ambiente de produção.

## Pré-requisitos

1. Conta na Vercel (para hospedagem do aplicativo)
2. Banco de dados PostgreSQL (recomendamos Neon.tech ou Supabase)
3. Node.js versão 16 ou superior

## Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL em um serviço como Neon.tech ou Supabase
2. Obtenha a string de conexão do banco de dados
3. Execute as migrações do Prisma para criar as tabelas:

```bash
npx prisma migrate deploy
```

## Configuração das Variáveis de Ambiente

Certifique-se de que as seguintes variáveis de ambiente estejam configuradas na plataforma de hospedagem:

- `DATABASE_URL`: URL de conexão com o banco de dados PostgreSQL
- `NEXTAUTH_SECRET`: Chave secreta para autenticação (se implementada)
- `NEXTAUTH_URL`: URL base do aplicativo (se autenticação for implementada)

## Implantação na Vercel

1. Instale a CLI da Vercel (opcional):

```bash
npm install -g vercel
```

2. Faça login na Vercel:

```bash
vercel login
```

3. Implante o aplicativo:

```bash
vercel --prod
```

Alternativamente, você pode conectar seu repositório GitHub à Vercel para implantação automática.

## Verificação Pós-implantação

Após a implantação, verifique:

1. Se o aplicativo está acessível pela URL fornecida
2. Se a conexão com o banco de dados está funcionando
3. Se todas as funcionalidades estão operando corretamente

## Manutenção

Para atualizações futuras:

1. Faça as alterações no código
2. Execute os testes para garantir que tudo está funcionando
3. Implante novamente usando `vercel --prod` ou através do pipeline de CI/CD

## Suporte

Em caso de problemas, verifique:

1. Logs da aplicação na plataforma Vercel
2. Conexão com o banco de dados
3. Configuração das variáveis de ambiente
