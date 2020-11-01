const Evento = require('../modelo/evento');
// Importar el módulo File System de Node
const fs = require('fs');
// Importar el módulo Path de Node
const path = require('path');


// Función Registro Eventos
function registrarEvento(req, res){
    var evento = new Evento();
    var parametros = req.body;
console.log("entroooo");
   
evento.evento = parametros.evento;
evento.director = parametros.director;
evento.fechas = parametros.fechas;
evento.hora = parametros.hora;
evento.descripcion = parametros.descripcion;
evento.numPanelistas = parametros.numPanelistas;
evento.nombrePanelistas = parametros.nombrePanelistas;
evento.numTickets = parametros.numTickets; 
evento.monetizacion = parametros.monetizacion;
evento.moneda = parametros.moneda;
evento.valor = parametros.valor; 
evento.web = parametros.web;
evento.linkFacebook = parametros.linkFacebook; 
evento.linkYoutube = parametros.linkYoutube;
evento.linkInstagram = parametros.linkInstagram;
evento.linkTwitter = parametros.linkTwitter;
evento.imgPortada = null;
evento.imgEvento = null; 
evento.paises = parametros.paises; 
evento.siChat = parametros.siChat; 
evento.siRecordacion = parametros.siRecordacion;
evento.siSoporteCorreo = parametros.siSoporteCorreo;
evento.idOrganizador = parametros.idOrganizador; 
evento.idPatrocinadores = parametros.idPatrocinadores; 
evento.idCategoria = parametros.idCategoria; 
evento.idTienda = parametros.idTienda; 
evento.idSala = parametros.idSala; 
evento.idEstadistica = parametros.idEstadistica;
evento.idEstadoEvento = parametros.idEstadoEvento;
evento.tiquetsVendidos = parametros.tiquetsVendidos;
evento.idEspectadoresTickets = parametros.idEspectadoresTickets;
evento.recaudoTickets = parametros.recaudoTickets; 

console.log(evento);
    // funcion save para interactuar con la BaseDatos
    evento.save((err, eventoNuevo)=>{

        
        if(err){
            res.status(500).send({message: "Error en el servidor", error:err   });
        }else{
            if(!eventoNuevo){
                res.status(200).send({message: "No fue posible realizar el registro"});
            }else{
                res.status(200).send({
                    message: "Evento Creado",
                    evento: eventoNuevo
                });
            }
        }
    });

}


//Función de mostrar todos los eventos
function getAllEvento(req, res){
    Evento.find({},{title:1},{sort:{title:1}},(err, eventoFound)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!eventoFound){
                res.status(200).send({message:"No fue posible encontrar el evento"});
            }else{
                res.status(200).send({
                    message: "Eventos encontrados",
                    evento: eventoFound
                });
            }
        }
    });

}

//Función de mostrar un evento especifico
function getEvento(req, res){
    var eventoId = req.params.id;
    Evento.findById(eventoId, (err, eventoFound)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!eventoFound){
                res.status(200).send({message:"No fue posible encontrar el evento"});
            }else{
                res.status(200).send({
                    message: "Película encontrada",
                    evento: eventoFound
                });
            }
        }
    });

}



// Función Actualizar Evento
function actualizarEvento(req, res){
    var eventoId = req.params.id;
    var nuevosDatosEvento = req.body;

    Evento.findByIdAndUpdate(eventoId, nuevosDatosEvento, (err, eventoActualizado)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!eventoActualizado){
                res.status(200).send({message: "No fue posible actualizar tus datos"});
            }else{
                res.status(200).send({
                    message: "Evento Actualizado!",
                    evento: nuevosDatosEvento
                });
            }
        }
    });
}


//Función de eliminar evento
function deleteEvento(req, res){
    var eventoId = req.params.id; 
    
    Evento.findByIdAndDelete(eventoId, (err, deletedEvento)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!deletedEvento){
                res.status(200).send({message:"No fue posible eliminar el evento"});
            }else{
                res.status(200).send({
                    message:"Evento eliminado",
                    evento: deletedEvento
                });
            }
        }
    });
}





// Función Subir IMG eventos
function subirImg(req, res){
    var eventoId = req.params.id;
    var nombreArchivo = "No has subido ninguna imagen...";

    // Validar si efectivamente se está enviando un archivo
    if(req.files){
        // Vamos a ir analizando la ruta del archivo, el nombre y la extensión
        // C:\\usuarios\descargas\imagen.png
        var rutaArchivo = req.files.imagen.path;
        console.log(`ruta Archivo: ${rutaArchivo}`);

        // Haremos un split para separar elementos
        // Esto nos generará un arreglo de datos
        var partirArchivo = rutaArchivo.split('\\');
        console.log(`partir Archivo: ${partirArchivo}`);

        // Acceder a la posición que contiene el nombre del archivo
        var nombreArchivo = partirArchivo[2];
        console.log(`Posición dato: ${nombreArchivo}`);

        // Haremos un split para separar el nombre del archivo de la extensión
        // ['imagen', 'png']
        var extensionImg = nombreArchivo.split('\.');
        console.log(`partirImg: ${extensionImg}`);

        // Accedemos a la posición de la extensión del archivo
        var extensionArchivo = extensionImg[1];
        console.log(`Extensión Archivo: ${extensionArchivo}`);


        // Validar si el formato del archivo es aceptable
        if(extensionArchivo == 'png'||extensionArchivo=='jpg'||extensionArchivo=='jpeg'){
            // Actualizar evento el campo imagen
            Evento.findByIdAndUpdate(eventoId, {imagen: nombreArchivo}, (err, eventoConImg)=>{
                if(err){
                    res.status(500).send({message: "Error en el servidor"});
                }else{
                    if(!eventoConImg){
                        res.status(200).send({message: "No fue posible subir la imagen"});
                    }else{
                        res.status(200).send({
                            message: "Imagen anexada!",
                            imagen: nombreArchivo,
                            evento: eventoConImg
                        });
                    }
                }
            });
        }else {
            // Formato no válido
            res.status(200).send({message: "Formato inválido! El archivo no es una imagen"});
        }

    }else{
        res.status(200).send({message: "No has subido imagenes"});
    }
}

// Función Mostrar Archivo
function mostrarArchivo(req, res){
    // Pedir el archivo que queremos mostrar
    // localhost:3000/api/obtenerImagen/:imageFile
    var archivo = req.params.imageFile;
    // Ubicación del archivo
    var ruta = './archivos/eventos/'+archivo;

    // Validar si existe o no
    // fs.exists('la ruta del archivo a buscar', (existencia)=>{})
    fs.exists(ruta, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(ruta));
        }else{
            res.status(200).send({message: "Imagen no Encontrada"});
        }
    });
}




// Exportar paquete de funciones
module.exports = {
    
    registrarEvento,
    getAllEvento,
    getEvento,
    actualizarEvento,
    deleteEvento,
    subirImg,
    mostrarArchivo

}