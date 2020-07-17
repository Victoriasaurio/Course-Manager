'use strict'
const express = require('express');
const app = express();

const path = require('path');

var bodyparse = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

//CONNECTION WITH PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// Section 1: Importación de rutas
//var rutas_docente = require('./routes/docent');
//var rutas_estudiante = require('./routes/estudiante');
//var rutas_curso = require('./routes/curso');
//var rutas_comentario = require('./routes/comentario');
//var rutas_etiqueta = require('./routes/etiqueta');

// Section 2: Cargar middlewares
app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());
app.use(cors());
app.use(morgan('dev'));

// Section 3: cors (Permisos para hacer peticiones)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, PUT, DELETE');
    next();
});

// Section 4: carga de rutas
//app.use('/api', rutas_docente);
//app.use('/api', rutas_estudiante);
//app.use('/api', rutas_curso);
//app.use('/api', rutas_comentario);
//app.use('/api', rutas_etiqueta);
//app.use('/imagenes', express.static('imagenes', { redirect: false }));

// Section 5: Exportaciones de app
module.exports = app;