# Sistema de Contatos e Cooperativas

> Este é um sistema de gerenciamento de contatos favoritos, cooperados e cooperativas, utilizando um banco de dados MySQL. Abaixo estão as principais entidades e operações disponíveis.

## 🧰 Bibliotecas, frameworks e ferramentas

> **⚠️ Aviso:** esta aplicação ainda está em construção até o presente momento. As ferramentas listadas abaixo estarão separados por uso atual ou ser estipulada futuramente em razão das regras de negócio.

### Frontend:

- React
- TypeScript

### Backend:

- Node.js
- Express.js
- fs
- https

### Banco de Dados:

- MySQL

## Entidades

### Contatos Favoritos

> A entidade Contatos Favoritos representa os contatos marcados como favoritos. Cada registro nesta entidade possui as seguintes informações:

| Campo           | contatos_favoritos            |
| --------------- | ----------------------------- |
| nome_contato    | Nome do contato favorito      |
| tipo_chave_pix  | Tipos de chave pix do usuário |
| chave_pix       | Chave pix                     |
| cooperado_id    | Id único do contato favorito  |
| lista_de_chaves | Lista de chaves               |

Operações
INSERT: Adiciona um novo contato favorito ao sistema.
SELECT: Recupera informações dos contatos favoritos.
UPDATE: Atualiza as informações de um contato favorito.
DELETE: Remove um contato favorito do sistema.

### Cooperados

> A entidade Cooperados representa os cooperados no sistema. Cada registro nesta entidade possui as seguintes informações:

| Campo          | cooperados                     |
| -------------- | ------------------------------ |
| cooperativa_id | Identificador único do usuário |
| conta_corrente | Conta corrente do usuário      |
| nome           | Nome do usuário                |

Operações
INSERT: Adiciona um novo cooperado ao sistema.
SELECT: Recupera informações dos cooperados.
UPDATE: Atualiza as informações de um cooperado.
DELETE: Remove um cooperado do sistema.

### Cooperativas

> A entidade Cooperativas representa as cooperativas cadastradas no sistema. Cada registro nesta entidade possui as seguintes informações:

| Campo     | cooperativas                   |
| --------- | ------------------------------ |
| codigos   | nome da cooperativa de crédito |
| descricao | resumo da cooperativa          |

Operações
INSERT: Adiciona uma nova cooperativa ao sistema.
SELECT: Recupera informações das cooperativas.
UPDATE: Atualiza as informações de uma cooperativa.
DELETE: Remove uma cooperativa do sistema.

### Lista de Chaves

> Aqui na Lista de Chaves contém um SELECT que recupera informações dos contatos favoritos ordenados por lista_de_chaves.

Operações
SELECT: Recupera informações dos contatos favoritos ordenados por lista de chaves.

> ## Como rodar o projeto de forma tradicional

Primeiro você vai da git clone do projeto:

```
git clone $URL_DO_PROJETO.git
```

Em seguida, você vai baixar as dependências:

```
npm install
```

Ou

```
yard add
```

## Inicializando o Backend

Na pasta do backend, execute:

```
npm start
```

O servidor estará disponível em https://localhost:2001.

## Inicializando o Frontend

Na pasta do frontend, execute:

```
yarn dev
```

Ou

```
npm run dev
```

A aplicação estará disponível em http://localhost:5173.

🖋️ Autor: Alec Lima
