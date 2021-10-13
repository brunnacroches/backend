
CRIANDO UMA API DO ZERO COM Node.JS

crie uma pasta

acesse a pasta pelo terminal

COMANDOS

1- PASSO:

digite o comando: npm init -y

para criar o arquivo packege.json

2-PASSO: 

Aperte ENTER nos comandos a seguir
(base) brunna@MacBook-Pro-de-Brunna backend % npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (backend) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/brunna/Desktop/backend/package.json:

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this OK? (yes)

3- PASSO: 
a pasta package.json foi criada

4- PASSO: 
 INSTALANDO ALGUMAS BIBLIOTECAS dentro do nosso PROJETO
Gerenciador de Pacotes: 
npm ou yarn?

É recomendado usar o gerenciador de pacotes YARN que ele é muito rápido, ele instala de forma muito rápida, e ele é mais seguro que o NPM
5- PASSO:

instalar a primeira biblioteca chamada EXPRESS
o EXPRESS ele é um framework, ele utiliza JS também, ele possui tratamento de exceções, e gerenciar diferente tipos de requisição HTTP

yarn add express
>>> DENTRO DA PASTA DO PROJETO

quando após o comando, é criado uma pasta chamada "node_modules" e quem várias bibliotecas

5- PASSO  :
para acessar a API 
===> NO TERMINAL : node + nome do arquivo principal 
node index.js

6- PASSO : 
testar se está funcionando : 
abrir o google e digitar: localhost:3000/
http://localhost:3000/

7- PASSO USANDO UMA BIBLIOTECA QUE AUTOMATIZA A ATUALIZAÇÃO 
yarn global add nodemon

8- PASSO
abra a pasta packege.json :
na linha 6
acrescente:     "start":"nodemon ./index.js", 
"scripts": {
    "start":"nodemon ./index.js", 
    "test": "echo \"Error: no test specified\" && exit 1"


9 - PASSO: 
ao digitar YARN START no terminal ele inicial e atualiza sozinho