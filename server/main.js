var express = require('express');
var app = express();

/* Como trabajaremos con soket, es recomendable usar el modulo HTTP
para pasarle la app a Express y manejar bien http */
var server = require('http').Server(app);

/*  - Aquí estará toda la funcionalidad de los sockets
    - Se reuiere la librería soket.io
    - Se  pasa la variable Server que tiene la app express y HTTP */
var io = require('socket.io')(server);

app.get('/',function(req, res){
    res.status(200).send("Hola Mundo");
});

server.listen(2104, function(){
    console.log("El servidor está corriendo en http://localhost:2104");
});