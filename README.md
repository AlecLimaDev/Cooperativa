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

+---------------------+
| contatos_favoritos  |
+---------------------+
| nome_contato        |
| tipo_chave_pix      |
| chave_pix           |
| cooperado_id        |
| lista_de_chaves     |
+---------------------+



Operações
INSERT: Adiciona um novo contato favorito ao sistema.
SELECT: Recupera informações dos contatos favoritos.
UPDATE: Atualiza as informações de um contato favorito.
DELETE: Remove um contato favorito do sistema.


### Cooperados
> A entidade Cooperados representa os cooperados no sistema. Cada registro nesta entidade possui as seguintes informações:

+---------------+
| cooperados    |
+---------------+
| cooperativa_id |
| conta_corrente |
| nome           |
+---------------+

Operações
INSERT: Adiciona um novo cooperado ao sistema.
SELECT: Recupera informações dos cooperados.
UPDATE: Atualiza as informações de um cooperado.
DELETE: Remove um cooperado do sistema.


### Cooperativas
> A entidade Cooperativas representa as cooperativas cadastradas no sistema. Cada registro nesta entidade possui as seguintes informações:

+---------------+
| cooperativas  |
+---------------+
| codigos       |
| descricao     |
+---------------+

Operações
INSERT: Adiciona uma nova cooperativa ao sistema.
SELECT: Recupera informações das cooperativas.
UPDATE: Atualiza as informações de uma cooperativa.
DELETE: Remove uma cooperativa do sistema.


### Lista de Chaves
> A entidade Lista de Chaves contém um SELECT que recupera informações dos contatos favoritos ordenados por lista_de_chaves.
+------------------+
| lista_de_chaves  |
+------------------+
| (SELECT result)  |
+------------------+

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
