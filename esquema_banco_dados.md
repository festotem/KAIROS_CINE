# Esquema do Banco de Dados para Aplicativo de Produtora Audiovisual

## Entidades e Relacionamentos

Este documento descreve o esquema do banco de dados para o aplicativo web de gerenciamento de projetos audiovisuais, incluindo cadastro de clientes, colaboradores, orçamentos e cronogramas.

## Diagrama de Entidade-Relacionamento

```
Cliente/Projeto 1 --- * Orçamento
Cliente/Projeto 1 --- * Cronograma
Cliente/Projeto * --- * Colaborador (através de ProjetoColaborador)
Orçamento 1 --- * ItemOrcamento
Cronograma 1 --- * TarefaCronograma
```

## Tabelas

### Cliente

Armazena informações sobre os clientes e seus projetos.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único do cliente/projeto |
| titulo | String | Título do projeto |
| produtora | String | Nome da produtora |
| contato_nome | String | Nome do contato |
| contato_telefone | String | Telefone do contato |
| contato_email | String | Email do contato |
| formato | String | Formato do projeto (HD-SDR, etc.) |
| camera | String | Tipo de câmera utilizada |
| resolucao | String | Resolução do projeto |
| codec | String | Codec utilizado |
| duracao_minutos | Integer | Duração em minutos |
| numero_episodios | Integer | Número de episódios/rolos |
| temporada | Integer | Número da temporada |
| canal | String | Canal/plataforma de distribuição |
| data_criacao | DateTime | Data de criação do registro |
| data_atualizacao | DateTime | Data da última atualização |

### Colaborador

Armazena informações sobre os colaboradores.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único do colaborador |
| funcao | String | Função do colaborador |
| nome_artistico | String | Nome artístico |
| nome_completo | String | Nome completo |
| data_nascimento | Date | Data de nascimento |
| endereco | String | Endereço completo |
| bairro | String | Bairro |
| cidade | String | Cidade |
| estado | String | Estado |
| cep | String | CEP |
| telefone_celular | String | Telefone celular |
| telefone_fixo | String | Telefone fixo |
| email | String | Email |
| nome_empresarial | String | Nome empresarial (Razão social) |
| cnpj | String | CNPJ |
| endereco_empresarial | String | Endereço empresarial |
| representante_nome | String | Nome do representante legal |
| representante_rg | String | RG do representante legal |
| representante_cpf | String | CPF do representante legal |
| banco | String | Nome do banco |
| agencia | String | Número da agência |
| conta | String | Número da conta |
| pix | String | Chave PIX |
| data_criacao | DateTime | Data de criação do registro |
| data_atualizacao | DateTime | Data da última atualização |

### ProjetoColaborador

Tabela de relacionamento entre projetos e colaboradores.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único do relacionamento |
| projeto_id | UUID | Referência ao projeto |
| colaborador_id | UUID | Referência ao colaborador |
| descricao_servicos | Text | Descrição dos serviços |
| dias_por_semana | Integer | Número de dias de prestação por semana |
| horario_trabalho | String | Horário de trabalho |
| local_prestacao | String | Local da prestação de serviços |
| data_inicio | Date | Data de início da prestação |
| data_termino | Date | Data de término da prestação |
| valor_total | Decimal | Valor total do contrato |
| data_criacao | DateTime | Data de criação do registro |
| data_atualizacao | DateTime | Data da última atualização |

### PagamentoColaborador

Armazena informações sobre os pagamentos aos colaboradores.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único do pagamento |
| projeto_colaborador_id | UUID | Referência ao relacionamento projeto-colaborador |
| data_pagamento | Date | Data do pagamento |
| valor | Decimal | Valor do pagamento |
| status | String | Status do pagamento (Pendente, Pago, Cancelado) |
| data_criacao | DateTime | Data de criação do registro |
| data_atualizacao | DateTime | Data da última atualização |

### Orcamento

Armazena informações sobre os orçamentos dos projetos.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único do orçamento |
| projeto_id | UUID | Referência ao projeto |
| data_orcamento | Date | Data do orçamento |
| valor_total | Decimal | Valor total do orçamento |
| status | String | Status do orçamento (Rascunho, Enviado, Aprovado, Rejeitado) |
| data_criacao | DateTime | Data de criação do registro |
| data_atualizacao | DateTime | Data da última atualização |

### CategoriaOrcamento

Armazena as categorias de itens de orçamento.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único da categoria |
| codigo | String | Código da categoria (ex: "01", "02") |
| nome | String | Nome da categoria (ex: "LABORATORIO DIGITAL") |
| data_criacao | DateTime | Data de criação do registro |
| data_atualizacao | DateTime | Data da última atualização |

### ItemOrcamento

Armazena os itens detalhados do orçamento.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único do item |
| orcamento_id | UUID | Referência ao orçamento |
| categoria_id | UUID | Referência à categoria |
| codigo | String | Código do item (ex: "01-01") |
| descricao | String | Descrição do serviço |
| multiplicador | Decimal | Multiplicador |
| quantidade | Decimal | Quantidade |
| unidade | String | Unidade (ex: "diária", "hr/material") |
| valor_unitario | Decimal | Valor unitário |
| valor_total | Decimal | Valor total |
| data_criacao | DateTime | Data de criação do registro |
| data_atualizacao | DateTime | Data da última atualização |

### Cronograma

Armazena informações sobre os cronogramas dos projetos.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único do cronograma |
| projeto_id | UUID | Referência ao projeto |
| nome | String | Nome do cronograma |
| data_inicio | Date | Data de início do cronograma |
| data_fim | Date | Data de término do cronograma |
| data_criacao | DateTime | Data de criação do registro |
| data_atualizacao | DateTime | Data da última atualização |

### TarefaCronograma

Armazena as tarefas do cronograma.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único da tarefa |
| cronograma_id | UUID | Referência ao cronograma |
| nome | String | Nome da tarefa |
| descricao | Text | Descrição da tarefa |
| data_inicio | Date | Data de início da tarefa |
| data_fim | Date | Data de término da tarefa |
| responsavel_id | UUID | Referência ao colaborador responsável |
| status | String | Status da tarefa (Não iniciada, Em andamento, Concluída) |
| porcentagem_conclusao | Integer | Porcentagem de conclusão (0-100) |
| data_criacao | DateTime | Data de criação do registro |
| data_atualizacao | DateTime | Data da última atualização |

## Índices

- Índice em `Cliente.titulo` para busca rápida por título de projeto
- Índice em `Colaborador.nome_completo` para busca rápida por nome
- Índice em `Colaborador.funcao` para filtrar colaboradores por função
- Índice em `ProjetoColaborador.projeto_id` e `ProjetoColaborador.colaborador_id` para consultas de relacionamento
- Índice em `ItemOrcamento.orcamento_id` e `ItemOrcamento.categoria_id` para consultas de itens por orçamento e categoria
- Índice em `TarefaCronograma.cronograma_id` para consultas de tarefas por cronograma

## Restrições

- Chaves estrangeiras para garantir integridade referencial
- Restrições de não-nulidade em campos obrigatórios
- Restrições de unicidade em códigos de itens dentro de um mesmo orçamento
