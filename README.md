# **Projeto de Farmácia - Sistema de Gerenciamento de Medicamentos**

Este repositório contém um sistema para gerenciamento de medicamentos, desenvolvido com o objetivo de organizar o controle de estoque e automatizar processos comuns de uma farmácia. O projeto foi criado como parte de uma iniciativa de aprendizado em desenvolvimento de software.

---

## **Funcionalidades**
- 📋 **Cadastro de Medicamentos**: Registre medicamentos no sistema com detalhes como nome, descrição e quantidade.
- 📦 **Controle de Estoque**: Acompanhe e atualize o estoque de medicamentos com facilidade.
- 🔍 **Busca de Medicamentos**: Pesquise medicamentos cadastrados por meio de filtros ou palavras-chave.
- 📝 **Histórico de Movimentações**: Monitore alterações no estoque, incluindo entradas e saídas de produtos.
- 🔒 **Autenticação de Usuários**: Controle o acesso ao sistema com um mecanismo de autenticação.

---

---
## Tecnologias utilizadas

| Item                          | Descrição         |
| ----------------------------- | ----------------- |
| **Servidor**                  | Node JS           |
| **Linguagem de programação**  | TypeScript        |
| **Framework**                 | Nest JS           |
| **ORM**                       | TypeORM           |
| **Banco de dados Relacional** | MySQL(local       |
| **Banco de dados Relacional** | Postgres(deploy)  |

---

## Diagrama de Classes 📊

```mermaid
classDiagram
    class Medicamento {
        +int id
        +String nome
        +String descricao
        +double preco
        +int quantidadeEmEstoque
        +fornecedor: Fornecedor
        +Categoria categoria
        +getInformacoes()
        +atualizarEstoque()
    }

    class Categoria {
        +int id
        +String nome
        +String descricao
        +List~Medicamento~ medicamentos
        +adicionarMedicamento(Medicamento medicamento)
        +removerMedicamento(Medicamento medicamento)
    }

    class Fornecedor {
        +int id
        +String nome
        +String contato
        +String endereco
        +List~Medicamento~ medicamentosFornecidos
        +fornecerMedicamento(Medicamento medicamento)
    }

    class Usuario {
        +int id
        +String nome
        +String email
        +String senha
        +String tipo
        +realizarLogin()
        +realizarLogout()
    }

    class Venda {
        +int id
        +Date data
        +Usuario vendedor
        +List~ItemVenda~ itens
        +double calcularTotal()
        +emitirRecibo()
    }

    class ItemVenda {
        +int id
        +Medicamento medicamento
        +int quantidade
        +double precoUnitario
        +double calcularSubtotal()
    }

    Medicamento --> Categoria : pertence a
    Medicamento --> Fornecedor : fornecido por
    Venda --> Usuario : realizada por
    Venda --> ItemVenda : contém
    ItemVenda --> Medicamento : refere-se a

```



## Configuração e Execução

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure o banco de dados no arquivo `app.module.ts`
4. Execute a aplicação: `npm run start:dev`
