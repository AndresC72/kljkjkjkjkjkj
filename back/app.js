const express = require('express');
const app = express();
// Declaración de cors -> CORS lo dejaremos al final
const cors = require('cors');

// Declaración de la constante de las rutas de usuarios
const eventosRutas = require('./rutas/eventosRutas');


// -- MIDDLEWARES --
app.use(express.json());
app.use(cors());

// Consumo de las rutas
app.use('/api', eventosRutas);

// -- FIN MIDDLEWARES --

// Exportación del módulo
module.exports = app;
