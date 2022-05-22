**Cambios en archivos y creación de  archivo .env**

El archivo .env (así se debe llamar .env), debe estar en la raiz de la carpeta API, dentro de esta archivo debe tener sólo lo que no debe ser visto pr el servidor, para este proyecto los cambios serán en el archivo  db.js.

**Crearción de la base de datos**
Dentro de Mysql o Postgress se tiene que crear una base de datos que debe llamarse:
`marketplace`, sin esta bae de datos no funciona todo lo demás.

**Archivo db.js**
 En la línea 1 debe tener la siguiente sentencia:
 
 ``require('dotenv').config();``

Las siguientes líneas deben ser borradas o comentadas:
1. const DB_USER = 'postgres'
2. const DB_PASSWORD = 'ONAI2105'
3. const DB_HOST = 'localhost'
4. const DB_NAME = 'marketplace'

**console.log(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);**

En su lugar debe estar la siguiente sentencia:

**const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});**

**El archivo .env**
- Este archivo tendrá las siguientes sentencias:
- DB_HOST="localhost"
- DB_DIALECT="mysql"
- PORT=3306
- BACKPORT=3001
- DB_USER="root"
- DB_PASSWORD=""
- DB_NAME="marketplace"

Como agregado, para quienes uses mysql se tiene que instalar la librería mysql2 dentro de la carpeta API,

`npm install mysql2`

Teóricamente para los que usan postgress no deber faltar nada, esto ya esta hecho en la rama 
`fix_db-js-Alvarofix_db-js-Alvaro`, solo hay que hacer pull a la rama y listo para revisar.

------------


Al correr el servidor back `npm start`, debe crear las tablas en automático en Mysql o Posgress, se ven al entrar al servidor de BD y 

------------


