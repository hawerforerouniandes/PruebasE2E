# PruebasE2E Automatizadas
- Hawer Alberto Forero Rey 
- John Edwin Guerrero Ayala
- Brayan Sebastian Hernandez Barrera
- Jhon Sebastian Bohorquez Guerrero

# Descripción de escenarios
|                                                                       Descripción                                                                        |          Cypress           |           Kraken           |        Responsable        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------- | ------------------------- |
| Escenario positivo con el objetivo de realizar login, crear, editar y previsualizar un post                                                              | editarpostcypress1.spec.js | editarpostkraken1.feature | Hawer Alberto Forero Rey  |
| Escenario negativo con el objetivo de realizar login, crear y editar post con título de mas de 255 caracteres                                            | editarpostcypress2.spec.js | editarpostkraken2.feature | Hawer Alberto Forero Rey  |
| Escenario positivo con el objetivo de realizar login, crear, editar y publicar agrregando recursos externos de youtube un post                           | editarpostcypress3.spec.js | editarpostkraken3.feature | Hawer Alberto Forero Rey  |
| Escenario positivo con el objetivo de realizar login, crear y asignar un tag a un post correspondiente                                                   | editarpostcypress4.spec.js   |   | Hawer Alberto Forero Rey  |
| Escenario negativo con el objetivo de realizar login, crear, publicar un post para posteriormente elimanrlo en estado publicado                                               |  |   | Hawer Alberto Forero Rey  |
| Escenario positivo con el objetivo de realizar login, crear un tag con datos aleatorios, validando que la cuenta aumente al salvar los cambios en el tag | createTagCrypess1.spec.js  |                            | John Edwin Guerrero Ayala |
| Escenario negativo con el objetivo de realizar login, crear un tag con un color erroneo, no debe finalizar la creación del tag                           | createTagCrypess1.spec.js  |                            | John Edwin Guerrero Ayala |

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
  - ```npm install cypress --save-dev ```
  - ```npm install @faker-js/faker --save-dev```

### Ejecución de pruebas ###
>### Condiciones iniciales para pruebas ###
>* Actualizar el archivo ```fixture/admin.json``` con los datos de un usuario existente en la aplicación para poder realizar el proceso de pruebas, con rol administrador.
>* Actualizar el archivo ```fixture/site.json``` con la url al blog de ghost
  
### Opciones de ejecución
1. Abrir el dashboard de ejecución  ```$(npm bin)/cypress open``` 
2. Ejecutando el comando ```cypress run --headless```

## Kraken
- Instalar ```npm install kraken-node -g```
- Crear un workspace personal y en la raiz ejecutar el siguiente comando
  ```kraken-node gen```
- Ubicarse en el directorio donde se instalo kraken y ejecutar 
  ```npm init``` ```npm install kraken-node```
- Instalar ADB ```brew install android-platform-tools```
- En la raiz del proyecto copiar el archivo  ```properties.json``` proporcionado en ```PruebasKraken``` de este repositorio
- En la ruta ```feature/web``` copiar los escenarios ubicados en ```PruebasCypress/feature``` de este repositorio
- En la ruta ```feature/web/step_definitions``` copiar el archivo ```PruebasCypress/feature/step_definitions/step.js``` de este repositorio
- Ejecutar kraken ```kraken-node run``` 

# Funcionalidades bajo prueba

|Nombre| Descripción|
|:-|:-|
|Crear post|Permite a un usuario administrador crear publicaciones (post) utilizando diferentes opciones de formato y recursos audiovisuales, así como la capacidad de agregar contenido dinámico|
|Editar post|Permite a un usuario administrador actualizar la información de una publicación en cuanto a su nombre y contenido, estando en estado publicada o no. |
|Crear tag|Permite a un usuario administrador crear una nueva etiqueta en el sistema para poder asociarla a publicaciones realizadas |
|Crear page|Permite a un usuario administrador la creación de una página, definiendo un título y agregado diferentes tipos de contenido multimedia a la página. Así como definir el estado inicial de la página, entre borrador(Draft) o publicada.|
|Editar página|Permite a un usuario administrador la modificación de una página, cambiando el título o el contenido multimedia a la página.  Así como cambiar el estado de la página, entre borrador(Draft) o publicada.|
