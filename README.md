# Podcast Directory

![APM](https://img.shields.io/apm/l/vim-mode)

<h4 align="center"> 
	🚧  Podcast Directory 🎧 Em construção... 🚧
</h4>

## Objetivo do projeto

O objetivo do aplicativo Podcast Directory é extrair os episódios mais recentes do podcast [Hipsters Ponto Tech](https://podcasts.google.com/feed/aHR0cHM6Ly9oaXBzdGVycy50ZWNoL2ZlZWQvcG9kY2FzdC8) e criar uma nova página que cria uma lista combinada de episódios, classificados por data de transmissão.

O aplicativo [Podcast Directory](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Podcast-Directory-App.md) faz parte do repositório [app-ideas](https://github.com/florinpop17/app-ideas#readme) como um desafio de nível intermediário.

# Índice

<!--ts-->

- [Funcionalidades](#funcionalidades)
- [Como executar o projeto](#como-executar-o-projeto)
  - [Pré Requisitos](#pré-requisitos)
  - [Rodando o Backend](#rodando-o-backend)
  - [Rodando o Frontend](#rodando-a-aplicação-web)
  - [Rodando os testes do backend](#rodando-os-testes-do-backend)
  - [Rodando os testes do frontend](#rodando-os-testes-do-frontend)
- [Tecnologias](#tecnologias)
- [Autor](#autor)
<!--te-->

## Funcionalidades

- [x] O usuário pode ver uma tabela de episódios de podcast
- [x] O usuário pode ver as linhas nesta tabela mostrando um ícone de episódio clicável, o título do episódio e a data em que foi originalmente transmitido
- [x] O usuário pode percorrer a lista
- [ ] O usuário pode clicar no ícone do episódio para exibir a página de episódios no site do Google Podcasts

## Como executar o projeto

Este projeto é divido em duas partes:

1. Backend (pasta backend)
2. Frontend (pasta frontend)

⚠️ O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/) e o navegador [Google Chrome](https://www.google.com/intl/pt-BR/chrome/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/download).

### Rodando o Backend

```bash
# Clone este repositório
$ git clone <https://github.com/lucasmartins96/podcast-directory.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd backend

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# O servidor iniciará na porta:3000 - acesse http://localhost:3000/podcasts
```

### Rodando a aplicação web

```bash
# Abra outro terminal (se estiver no VS Code) e acesse a pasta frontend
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# A aplicação React iniciará automaticamente na porta:3001. Caso não inicie automaticamente, acesse http://localhost:3001
```

### Rodando os testes do backend
```bash
# Clone este repositório (caso já tenha feito avance para o próximo passo)
$ git clone <https://github.com/lucasmartins96/podcast-directory.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd backend

# Instale as dependências (caso não tenha instalado em passos anteriores)
$ npm install

# Execute os testes
$ npm test
```

### Rodando os testes do frontend
```bash
# Rodando os testes do frontend
$ cd frontend

# Instale as dependências (caso não tenha instalado em passos anteriores)
$ npm install

# Execute os testes
$ npm test
```

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

Website

- [React](https://reactjs.org/)

> Veja o arquivo [package.json](./frontend/package.json)

Server ([NodeJS](https://nodejs.org/) + [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript))

- [Express](http://expressjs.com/)
- [CORS](https://github.com/expressjs/cors#readme)
- [puppeteer-core](https://github.com/puppeteer/puppeteer#readme)

> Veja o arquivo [package.json](./backend/package.json)

## Autor

---

<a href="https://github.com/lucasmartins96">
 <img style="border-radius: 50%;" src="https://i.ibb.co/9qyGrPz/133705661-2282303861913690-7277653750101206726-o.jpg" width="100px;" alt=""/>
 <br />
 <sub><b>Lucas Martins</b></sub></a> <a href="https://github.com/lucasmartins96" title="perfil github">🚀</a>

Feito por Lucas Martins 👋 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Lucas%20Martins-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lumartins-silva/)](https://www.linkedin.com/in/lumartins-silva/)
[![Gmail Badge](https://img.shields.io/badge/-lucasmartins.dsilva@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lucasmartins.dsilva@gmail.com)](mailto:lucasmartins.dsilva@gmail.com)
