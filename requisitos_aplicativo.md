# Requisitos do Aplicativo Web para Produtora Audiovisual

## 1. Visão Geral
Desenvolver um aplicativo web de fácil atualização para gerenciamento de projetos audiovisuais, incluindo cadastro de clientes e colaboradores, orçamentos e cronogramas de projetos.

## 2. Requisitos Funcionais

### 2.1 Cadastro de Clientes
- Armazenar informações de clientes e projetos:
  - Título do projeto
  - Produtora
  - Contato (nome, telefone, email)
  - Formato (HD-SDR, etc.)
  - Especificações técnicas (câmera, resolução, codec)
  - Duração (em minutos)
  - Número de episódios/rolos
  - Temporada
  - Canal/plataforma de distribuição

### 2.2 Cadastro de Colaboradores
- Dados pessoais:
  - Função
  - Nome artístico
  - Nome completo
  - Data de nascimento
  - Endereço completo
  - Bairro/Cidade
  - Estado/CEP
  - Telefone celular
  - Telefone fixo
  - E-mail

- Dados empresariais (quando aplicável):
  - Nome empresarial (Razão social)
  - CNPJ
  - Endereço completo

- Representante legal:
  - Nome completo
  - RG
  - CPF

- Prestação de serviços:
  - Função
  - Descrição dos serviços
  - Número de dias de prestação por semana
  - Horário de trabalho
  - Local da prestação de serviços

- Prazo da prestação:
  - Data de início
  - Data de término

- Valor do contrato:
  - Valor total
  - Cronograma de pagamentos (datas e valores)
  - Dados bancários (banco, agência, conta, PIX)

### 2.3 Orçamentos de Projetos
- Gerenciamento de orçamentos com categorias:
  - Laboratório Digital
  - Conform
  - Correção de Cor
  - Efeitos Visuais (VFX)
  - Efeitos Gráficos (GFX)
  - Masterização
  - Cinema Digital
  - Deliverables
  - Edit
  - Extras
  - Deliveries de Áudio
  - Internal Quality Control

- Para cada item de orçamento:
  - Código do item
  - Descrição do serviço
  - Multiplicador
  - Quantidade
  - Unidade
  - Valor unitário
  - Valor total

### 2.4 Cronogramas de Projetos
- Gerenciamento de cronogramas:
  - Etapas do projeto
  - Datas de início e término
  - Responsáveis
  - Status de conclusão

## 3. Requisitos Não-Funcionais

### 3.1 Usabilidade
- Interface intuitiva e responsiva
- Adaptação para dispositivos móveis e desktop
- Facilidade de atualização de dados

### 3.2 Desempenho
- Tempo de resposta rápido
- Capacidade de lidar com múltiplos usuários simultâneos

### 3.3 Segurança
- Autenticação de usuários
- Controle de acesso baseado em funções
- Proteção de dados sensíveis

### 3.4 Manutenibilidade
- Código modular e bem documentado
- Facilidade de atualização e expansão

## 4. Arquitetura Técnica

### 4.1 Frontend
- Next.js (React)
- Tailwind CSS para estilização
- React Hook Form para formulários
- Zustand/Context API para gerenciamento de estado

### 4.2 Backend
- API Routes do Next.js
- Prisma como ORM
- PostgreSQL como banco de dados

### 4.3 Implantação
- Vercel para hospedagem
- Supabase/Neon para banco de dados PostgreSQL

## 5. Fluxos de Usuário

### 5.1 Gestão de Clientes
- Cadastrar novo cliente/projeto
- Visualizar lista de clientes/projetos
- Editar informações de cliente/projeto
- Excluir cliente/projeto

### 5.2 Gestão de Colaboradores
- Cadastrar novo colaborador
- Visualizar lista de colaboradores
- Editar informações de colaborador
- Excluir colaborador
- Filtrar colaboradores por função

### 5.3 Gestão de Orçamentos
- Criar novo orçamento
- Visualizar lista de orçamentos
- Editar orçamento existente
- Duplicar orçamento
- Exportar orçamento para Excel
- Calcular totais e subtotais automaticamente

### 5.4 Gestão de Cronogramas
- Criar novo cronograma
- Visualizar cronograma
- Atualizar status de tarefas
- Exportar cronograma
