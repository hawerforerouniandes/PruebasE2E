# PruebasE2E Automatizadas
- Hawer Alberto Forero Rey 
- John Edwin Guerrero Ayala
- Brayan Sebastian Hernandez Barrera
- Jhon Sebastian Bohorquez Guerrero

# Descripción de escenarios
| Descripción                        |  Cypress |Kraken | Responsable |
|------------------------------------|------------------|-------------|-----|
| Escenario positivo con el objetivo de realizar login, crear, editar y previsualizar un post  |  editarpostcypress1.spec.js |editarpostcypress1.feature|@hawerforerouniandes| 
| Escenario negativo con el objetivo de  realizar login, crear y editar post con título de mas de 255 caracteres  |  editarpostcypress2.spec.js |editarpostcypress2.feature|@hawerforerouniandes| 
| Escenario positivo con el objetivo de realizar login, crear, editar y publicar agrregando recursos externos de youtube un post  |  editarpostcypress3.spec.js |editarpostcypress3.feature|@hawerforerouniandes| 

# Configuración de herramientas
## Ghost
- Crear un workspace personal y en la raiz ejecutar el siguiente comando
  ```ghost install 3.41.1 local --force ```
- Ubicarse en el directorio donde se instalo ghost y ejecutar
 ```cypress open ```
## Cypress
- Crear un workspace personal y en la raiz ejecutar el siguiente comando
  ```npm install -g cypress ```
- Ubicarse en el directorio donde se instalo cypress y ejecutar 
  ```mpm install cypress --save-dev ```
- En el directorio  ```integration``` copiar los escenarios ubicados en ```PruebasCypress``` de este repositorio
