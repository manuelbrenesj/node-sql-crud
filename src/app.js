
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();


// IMPORTAR ROUTES
const userRoute = require('./routes/user');

// SETTINGS = CONFIGURA EXPRESS
app.set('port', process.env.PORT || 3000); // PORT ALMACENA Y USA PUERTO QUE ESTA CONFIGURADO EN SERVIDOR, SI NO USE EL 3000
app.set('views', path.join(__dirname, 'views')) // UNE LOS SIGUIENTES DIRECTORIOS Y LOS GUARDA EN 'VIEWS'
app.set('view engine', 'ejs'); // EJS MOTOR DE PLANTILLAS

// MIDDLEWARES = FUNCIONES QUE SE EJECUTAN ANTES DE LAS PETICIONES (ROUTES) DE LOS USUARIOS
app.use(morgan('dev')); //MUESTRA EN CONSOLA LA PETICION GET POST PUT DELETE
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '1992',
    port: 3306,
    database: 'crud_db'
}, 'single'));
app.use(express.urlencoded({extended: false})); // PERMITE ENTENDER TODOS LOS DATOS DE LOS FORMULARIOS

// ROUTES
app.use('/', userRoute); //PARA USAR LAS RUTAS DE USER

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public'))); //DECIDE DONDE ESTAN COMPLEMENTOS ESTATICOS IMAGENES, ETC QUE ESTAN UN PUBLIC

// START SERVER
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
});

