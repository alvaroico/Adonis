# Adonis
Teste AdonisJs 

# npm init adonis-ts-app users
▸ api   (Tailored for creating a REST API server)
  web   (Traditional web application with server rendered templates)
  slim  (A smallest possible AdonisJS application)

# node ace --help    
node ace make:controller User

curl --location --request POST 'http://localhost:3333/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "teste",
    "username": "alvaroico"
}'

Criando o Banco
npm i @adonisjs/lucid
node ace configure @adonisjs/lucid
❯ Select the database driver you want to use …  Press <SPACE> to select
◉ SQLite
◯ MySQL / MariaDB
◯ PostgreSQL
◯ OracleDB
◯ Microsoft SQL Server
❯ Select where to display instructions …  Press <ENTER> to select
  In the browser
▸ In the terminal

# Migration

node ace make:migration users
node ace migration:run

# Model
node ace make:model users

