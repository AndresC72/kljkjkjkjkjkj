const express = require('express');
const EventoControl = require('../control/eventoControl');
// Importar el paquete connect-multiparty
const multipart = require('connect-multiparty');
// A través de connect-multiparty, apuntamos a la carpeta que deseemos en que se guarden los archivos
const subirImgDirectorio = multipart({uploadDir: './archivos/eventos'});

var api = express.Router();

// protección de rutas en Angular -> guards

// Ruta Registrar Evento -> angular url http://localhost:3000/api/

api.post('/registrarEvento', EventoControl.registrarEvento);

//Ruta Obtener todos los eventos
api.get('/getAllEvento', EventoControl.getAllEvento);

//Ruta Obtener un evento en especÍfico por medio de su ID
api.get('/getEvento/:id', EventoControl.getEvento);

//Ruta Actualizar evento
api.put('/actualizarEvento/:id', EventoControl.actualizarEvento);

//Ruta Eliminar evento
api.delete('/deleteEvento/:id', EventoControl.deleteEvento);

//Ruta subir imagen del evento
api.put('/subirImg/:id', subirImgDirectorio, EventoControl.subirImg);

//Ruta para mostrar imagen del evento
api.get('/mostrarArchivo/:imageFile',EventoControl.mostrarArchivo);





// Exportar el módulo
module.exports = api;