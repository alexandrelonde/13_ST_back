<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Configuração Adicional
Para garantir que o backend funcione corretamente, siga os passos abaixo:

### Pré-requisitos
Node.js e npm
MySQL

### Passos para Configuração
**1 - Clonar o Repositório** <br>
Primeiro, você precisa clonar o repositório do GitHub e entrar no diretório do projeto.

```bash
# Cloando o repositório
$ git clone https://github.com/alexandrelonde/13_ST_back.git

# Entrando na pasta do projeto
$ cd 13_ST_back
```

<br>

**2 - Configurar Variáveis de Ambiente** <br>
Crie um arquivo .env na raiz do projeto com as seguintes informações. Substitua sua_senha_do_mysql pela sua senha do MySQL:

```plaintext
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha_do_mysql
DB_DATABASE=sabortech
```

<br>

**3 - Criar o Banco de Dados** <br>
Acesse o MySQL e crie o banco de dados sabortech:

```bash
# Acessando o MySQL
$ mysql -u root -p
```
Depois de inserir a senha, no prompt do MySQL, execute:

```sql
CREATE DATABASE sabortech;
```

<br>

**4 - Criar Usuário no Banco de Dados** <br>
Crie um usuário no banco de dados com um nome, e-mail e password.


<br>

**5 - Instalar Dependências** <br>
Instale todas as dependências do projeto:

```bash
$ npm install
```

<br>

**6 - Rodar o Projeto** <br>
Inicie o servidor de desenvolvimento:

```bash
$ npm run start:dev
```


## Notas Adicionais
* Certifique-se de que o MySQL está rodando: Verifique se o MySQL está em execução no seu sistema.
* Permissões de Acesso: Certifique-se de que você tem as permissões necessárias para criar e acessar o banco de dados **sabortech**.
* Configuração do **.gitignore**: O arquivo .env foi adicionado ao .gitignore para garantir que ele não seja enviado ao repositório. Se você precisar ajustar as variáveis de ambiente, faça isso diretamente no arquivo .env localmente.


## Problemas Comuns
* Erro de Conexão ao Banco de Dados: <br> Se você encontrar erros de conexão, verifique as credenciais e se o banco de dados está em execução.
* Dependências não Instaladas: <br> Se houver erros ao iniciar o projeto, certifique-se de que todas as dependências foram instaladas corretamente com npm install.
* Autenticação e Acesso: <br> Para acessar a aplicação, você precisa criar um usuário manualmente no banco de dados. Utilize as credenciais criadas para fazer login e obter um token de acesso que liberará a aplicação.


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
