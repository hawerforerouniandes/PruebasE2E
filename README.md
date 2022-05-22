# PruebasE2E Automatizadas
- Hawer Alberto Forero Rey 
- John Edwin Guerrero Ayala
- Brayan Sebastian Hernandez Barrera
- Jhon Sebastian Bohorquez Guerrero 

# Descripción de escenarios
## Posts
|  No.  |                                                           Descripción                                                            |          Cypress           |            Kraken            |                           Responsable                           |     Regresión      |     Estrategia de generación de datos     |
| :---: | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------------------------- | --------------------------------------------------------------- | :----------------: | :---------------------------------------: |
|  01   | Escenario positivo con el objetivo de realizar login, crear y previsualizar un post con título aleatorio                         | editarpostcypress1.spec.js | 1.editarpostkraken1.feature  | Hawer Alberto Forero Rey                                        | :white_check_mark: | (Kraken) Pool de datos aleatorio dinámico |
|  02   | Escenario negativo con el objetivo de realizar login, crear y editar post con título de mas de 255 caracteres                    | editarpostcypress2.spec.js | 1.editarpostkraken2.feature  | Hawer Alberto Forero Rey                                        |     :no_entry:     |      (Kraken) Pool de datos a-priori      |
|  03   | Escenario positivo con el objetivo de realizar login, crear, editar y publicar agrregando recursos externos de youtube un post   | editarpostcypress3.spec.js | 1.editarpostkraken3.feature  | Hawer Alberto Forero Rey                                        |     :no_entry:     |      (Kraken) Pool de datos a-priori      |
|  04   | Escenario positivo con el objetivo de realizar login, crear y asignar un tag a un post correspondiente                           | editarpostcypress4.spec.js | 1.editarpostkraken4.feature  | Hawer Alberto Forero Rey                                        | :white_check_mark: | (Kraken) Pool de datos aleatorio dinámico |
|  05   | Escenario negativo con el objetivo de realizar login, crear, publicar un post para posteriormente elimanrlo en estado publicado  | editarpostcypress5.spec.js | 1.editarpostkraken5.feature  | Hawer Alberto Forero Rey                                        |     :no_entry:     | (Kraken) Pool de datos aleatorio dinámico |
|  06   | Escenario positivo con el objetivo de realizar login, crear y previsualizar un post con título y descripción aleatoria           |                            | 1.editarpostkraken6.feature  | Hawer Alberto Forero Rey                                        |         ⛔          | (Kraken) Pool de datos aleatorio dinámico |
|  07   | Escenario positivo con el objetivo de realizar login, crear y previsualizar un post con título a priori                          |                            | 1.editarpostkraken7.feature  | Hawer Alberto Forero Rey                                        |     :no_entry:     |      (Kraken) Pool de datos a-priori      |
|  08   | Escenario positivo con el objetivo de realizar login, crear y previsualizar un post con título y descripción a priori            |                            | 1.editarpostkraken8.feature  | Hawer Alberto Forero Rey                                        |         ⛔          |      (Kraken) Pool de datos a-priori      |
|  09   | Escenario negativo con el objetivo de realizar login, crear y previsualizar un post con título de caracteres especiales          |                            | 1.editarpostkraken9.feature  | Hawer Alberto Forero Rey                                        |     :no_entry:     | (Kraken) Pool de datos aleatorio dinámico |
|  10   | Escenario negativo con el objetivo de realizar login, crear y previsualizar un post sin título y con contenido dinámico          |                            | 1.editarpostkraken10.feature | Hawer Alberto Forero Rey                                        |     :no_entry:     | (Kraken) Pool de datos aleatorio dinámico |
|  11   | Escenario positivo con el objetivo de realizar login, crear un post registrando el meta data (Meta title) con contenido dinámico |                            | 1.editarpostkraken11.feature | Hawer Alberto Forero Rey                                        |     :no_entry:     | (Kraken) Pool de datos aleatorio dinámico |
|  12   | Escenario positivo con el objetivo de realizar login, crear un post registrando el meta data (Meta description) con contenido dinámico |                            | 1.editarpostkraken12.feature | Hawer Alberto Forero Rey                                        |     :no_entry:     | (Kraken) Pool de datos aleatorio dinámico |
|  13   | Escenario positivo con el objetivo de realizar login, crear y publicar un post registrando todo el meta data con datos a priori |                            | 1.editarpostkraken13.feature | Hawer Alberto Forero Rey                                        |     :no_entry:     | (Kraken) Pool de datos a-priori  |
|       | Escenario positivo con el objetivo de crear el borrador de un post y verificar que se encuentre en la lista de post              | crearpostcypress1.spec.js  |                              | [Jhon Sebastian Bohorquez Guerrero](https://github.com/jhonsbg) |     :no_entry:     |                                           |
|       | Escenario positivo con el objetivo de crear y publicar un post y verificar que se encuentre en la lista de post                  | crearpostcypress2.spec.js  |                              | [Jhon Sebastian Bohorquez Guerrero](https://github.com/jhonsbg) |         ⛔          |                                           |



## Pages

|  No.  |                                                                                                     Descripción                                                                                                     |          Cypress          |          Kraken          |            Responsable             |     Regresión      |   Estrategia de generación de datos   |
| :---: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------ | ---------------------------------- | :----------------: | :-----------------------------------: |
|  01   | Escenario positivo con el objetivo de realizar login, crear una Page con datos aleatorios, publicar, editar el título y actualizar la publicación                                                                   | editPagesCypress1.spec.js |                          | John Edwin Guerrero Ayala          | :white_check_mark: | (Cypress) Data pool genérico Faker.js |
|  02   | Escenario negativo con el objetivo de realizar login, crear una Page con datos aleatorios, publicar, editar el título por uno de más de 255 caracteres y actualizar la publicación                                  | editPagesCypress2.spec.js |                          | John Edwin Guerrero Ayala          | :white_check_mark: | (Cypress) Data pool genérico Faker.js |
|  03   | Escenario positivo con el objetivo de realizar login, crear una Page con datos aleatorios, dejar en borrador, volver a seleccionar y publicar                                                                       | editPagesCypress3.spec.js |                          | John Edwin Guerrero Ayala          | :white_check_mark: | (Cypress) Data pool genérico Faker.js |
|  04   | Escenario positivo con el objetivo de realizar login, crear una Page con datos aleatorios, publicar y eliminar                                                                                                      | editPagesCypress4.spec.js |                          | John Edwin Guerrero Ayala          |     :no_entry:     | (Cypress) Data pool genérico Faker.js |
|  05   | Escenario positivo con el objetivo de crear una pagina en la aplicacion Ghost y verificar que se encuentre en la lista de paginas                                                                                   | crearpagecypress1.js      | crearpagekraken1.feature | Brayan Sebastian Hernández Barrera | :white_check_mark: |                                       |
|  06   | Escenario positivo con el objetivo de crear una pagina en la aplicacion Ghost con 3 elementos, los cuales fueron una lista desplegable con valores, una separacion y un boton, y verificar que la pagina sea creada | crearpagecypress2.js      | crearpagekraken2.feature | Brayan Sebastian Hernández Barrera |     :no_entry:     |                                       |
|  07   | Escenario positivo con el objetivo de crear una pagina en la aplicacion Ghost con un video adjunto y verificar que la pagina sea creada                                                                             | crearpagecypress3.js      | crearpagekraken3.feature | Brayan Sebastian Hernández Barrera | :white_check_mark: |                                       |
|  08   | Escenario positivo con el objetivo de crear una pagina en la aplicacion Ghost y publicarla, y verificar que se haya publicado correctamente                                                                         | crearpagecypress4.js      | crearpagekraken4.feature | Brayan Sebastian Hernández Barrera | :white_check_mark: |                                       |
|  09   | Escenario positivo con el objetivo de crear una pagina en la aplicacion Ghost y previsualizarla para observar como se veria la pagina web publicada                                                                 | crearpagecypress5.js      | crearpagekraken5.feature | Brayan Sebastian Hernández Barrera |     :no_entry:     |                                       |

## Tags
|  No.  |                                                                                         Descripción                                                                                         |          Cypress          | Kraken |                           Responsable                           |     Regresión      |              Estrategia               |
| :---: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------ | --------------------------------------------------------------- | :----------------: | :-----------------------------------: |
|  01   | Escenario positivo con el objetivo de realizar login, crear un tag con datos aleatorios, validando que la cuenta aumente al salvar los cambios en el tag                                    | createTagCrypess1.spec.js |        | John Edwin Guerrero Ayala                                       | :white_check_mark: | (Cypress) Data pool genérico Faker.js |
|  02   | Escenario negativo con el objetivo de realizar login, crear un tag con un color erroneo, no debe finalizar la creación del tag                                                              | createTagCrypess1.spec.js |        | John Edwin Guerrero Ayala                                       | :white_check_mark: | (Cypress) Data pool genérico Faker.js |
|  03   | Escenario negativo con el objetivo de crear un tag con nombre con 200 caracteres y verificar que se muestre el mensaje de error “Tag names cannot be longer than 191 characters.”           | creartagcypress2.spec.js  |        | [Jhon Sebastian Bohorquez Guerrero](https://github.com/jhonsbg) |         ⛔          |                                       |
|  04   | Escenario negativo con el objetivo de crear un tag con una descripción de 600 caracteres y verificar que se muestre el mensaje de error “Description cannot be longer than 500 characters.” | creartagcypress3.spec.js  |        | [Jhon Sebastian Bohorquez Guerrero](https://github.com/jhonsbg) |         ⛔          |                                       |
|  05   | Escenario positivo con el objetivo de crear y editar el nombre de un tag y verificar que se encuentre en la lista de tags.                                                                  | creartagcypress4.spec.js  |        | [Jhon Sebastian Bohorquez Guerrero](https://github.com/jhonsbg) |         ⛔          |                                       |


## Login
|  No.  |                     Descripción                      |          Cypress          | Kraken |        Responsable        | Regresión  | Estrategia de generación de datos |
| :---: | ---------------------------------------------------- | ------------------------- | ------ | ------------------------- | :--------: | :-------------------------------: |
|  01   | Escenario positivo con el objetivo de realizar login | userLoginCypress1.spec.js |        | John Edwin Guerrero Ayala | :no_entry: |                                   |

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
- En la ruta ```feature``` copiar los escenarios ubicados en ```PruebasKraken/feature``` de este repositorio
- En la ruta ```feature/web/step_definitions``` copiar el archivo ```PruebasKraken/feature/step_definitions/step.js``` de este repositorio
- Ejecutar kraken ```./node_modules/kraken-node/bin/kraken-node run  ``` 

>### Condiciones iniciales para pruebas ###
>* Actualizar el archivo ```properties.json``` con los datos de un usuario existente en la aplicación para poder realizar el proceso de pruebas, con rol administrador.

## Resemble.js
>### Configuración proyecto en blanco ###

>* Ubicarse en un directorio personal con el comando ```cd <ruta>```
>* Cree un subdirectorio vacío con el comando ```mkdir <nombre>``` y ubicarse en el
>* Crear un proyecto con el comando ```npm init```
>* En este directorio del proyecto debe crear un archivo llamado ```index.js```  que contendrá el código fuente para realizar la prueba de regresión visual 
>* En este directorio del proyecto debe crear un archivo llamado ```index.js```  que contendrá el código fuente para realizar la prueba de regresión visual 
>* Crear un archivo ```config.json``` que le permitirá establecer los parámetros requeridos para la prueba.

- Descargarb el proyecto ```esemble``` ubicado en la raiz del repositorio
- Ubicarse en el proyecto descargado
- Ejecutar el comado ```npm install```
- Ejecutar las pruebas de ejecución por su nombre con el comado ```node <nombre-de-la-prueba>.js```


  

# Funcionalidades bajo prueba

|    Nombre     |                                                                                                               Descripción                                                                                                               |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Crear post    | Permite a un usuario administrador crear publicaciones (post) utilizando diferentes opciones de formato y recursos audiovisuales, así como la capacidad de agregar contenido dinámico                                                   |
| Editar post   | Permite a un usuario administrador actualizar la información de una publicación en cuanto a su nombre y contenido, estando en estado publicada o no.                                                                                    |
| Crear tag     | Permite a un usuario administrador crear una nueva etiqueta en el sistema para poder asociarla a publicaciones realizadas                                                                                                               |
| Crear page    | Permite a un usuario administrador la creación de una página, definiendo un título y agregado diferentes tipos de contenido multimedia a la página. Así como definir el estado inicial de la página, entre borrador(Draft) o publicada. |
| Editar página | Permite a un usuario administrador la modificación de una página, cambiando el título o el contenido multimedia a la página.  Así como cambiar el estado de la página, entre borrador(Draft) o publicada.                               |
