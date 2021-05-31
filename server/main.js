var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

/* Usamos un middleware para usar elementos estáticos en 
la sección pública de la aplicación */
app.use(express.static('public'));

app.get('/',function(req, res){
    res.status(200).send("Estoy dentro de la aplicación socket");
});

io.on('connection', function(socket){
    console.log('Alguien se ha conectado con socket');
})

server.listen(2104, function(){
    console.log("El servidor está corriendo en http://localhost:2104");
});