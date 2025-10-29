# 🍔 Food Commerce

Um e-commerce moderno de comidas desenvolvido com React, TypeScript e Styled Components. O projeto oferece uma experiência completa de compra online com carrinho de compras, diferentes categorias de produtos e sistema de pagamento.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API](#api)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

O Food Commerce é uma aplicação web responsiva que simula um e-commerce de alimentos, permitindo aos usuários navegar por diferentes categorias de produtos (hambúrgueres, pizzas, bebidas e sorvetes), adicionar itens ao carrinho e finalizar pedidos.

### ✨ Funcionalidades

- 🏠 **Página Principal**: Navegação entre categorias de produtos
- 🍔 **Catálogo de Produtos**: Hambúrgueres, pizzas, bebidas e sorvetes
- 🛒 **Carrinho de Compras**: Adicionar, remover e alterar quantidades
- 💰 **Cálculo Automático**: Subtotais e total do pedido
- 📱 **Design Responsivo**: Adaptado para desktop e mobile
- 🎨 **Interface Moderna**: Styled Components com tema customizado
- 🔔 **Notificações**: Toast notifications para feedback do usuário
- 💳 **Página de Pagamento**: Formulário para finalização do pedido
- 🎭 **Máscaras de Input**: Formatação automática para campos de entrada

## 🚀 Tecnologias Utilizadas

### Frontend

- **React** 18.2.0 - Biblioteca para construção da interface
- **TypeScript** 4.9.5 - Superset do JavaScript com tipagem estática
- **Styled Components** 5.3.11 - CSS-in-JS para estilização
- **React Router DOM** 6.22.1 - Roteamento da aplicação
- **React Hook Form** 7.51.2 - Gerenciamento de formulários
- **React Icons** 4.12.0 - Biblioteca de ícones
- **React Toastify** 10.0.5 - Notificações toast

### Utilitários

- **Axios** 0.27.2 - Cliente HTTP para requisições
- **Polished** 4.3.1 - Utilitários para CSS-in-JS
- **Brazilian Utils** 1.0.0-rc.12 - Utilitários para dados brasileiros
- **React IMask** 7.5.0 - Máscaras para inputs
- **Yup** 1.4.0 - Validação de esquemas

### Desenvolvimento

- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **JSON Server** - Mock API para desenvolvimento

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🔧 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/food-commerce-dev.git
cd food-commerce-dev
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm start
# ou
yarn start
```

4. **Inicie o JSON Server (em outro terminal)**

```bash
npm run json-server
# ou
yarn json-server
```

A aplicação estará disponível em `http://localhost:3000` e a API mock em `http://localhost:8080`.

## 🎮 Como Usar

### Navegação

1. **Página Principal**: Acesse diferentes categorias através do menu
2. **Produtos**: Visualize os produtos disponíveis em cada categoria
3. **Carrinho**: Adicione produtos clicando no botão "+"
4. **Gerenciar Carrinho**: Acesse o carrinho pelo ícone no header
5. **Finalizar Pedido**: Complete o formulário de pagamento

### Funcionalidades do Carrinho

- ➕ **Adicionar**: Clique no botão "+" para adicionar produtos
- ➖ **Remover**: Use os botões "-" e "+" para ajustar quantidades
- 🗑️ **Excluir**: Remova completamente um item do carrinho
- 💰 **Total**: Visualize o valor total do pedido em tempo real

## 📁 Estrutura do Projeto
