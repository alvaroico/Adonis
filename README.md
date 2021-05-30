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