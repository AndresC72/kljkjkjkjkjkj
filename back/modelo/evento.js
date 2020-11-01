const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto Schema
var EventoSchema = new Schema({

 
evento:String,
director:String,
fechas:Date,
hora:String,
descripcion:String,
numPanelistas:Number,
nombrePanelistas:String,
numTickets:Number,
monetizacion:Boolean,
moneda:String,
valor:Number,
web:String,
linkFacebook:String,
linkYoutube:String,
linkInstagram:String,
linkTwitter:String,
imgPortada:String,
imgEvento:Array,
paises:String,
siChat:Boolean,
siRecordacion:Boolean,
siSoporteCorreo:Boolean,
idOrganizador:String,
idPatrocinadores:Array,
idCategoria:String,
idTienda:String,
idSala:String,
idEstadistica:String,
idEstadoEvento:String,
tiquetsVendidos:Number,
idEspectadoresTickets:String,
recaudoTickets:Number


});

// Exportar el modelo
module.exports = mongoose.model('Evento', EventoSchema);