var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server); //

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    io.emit('message', msg);
  });
});

server.listen(process.env.PORT, process.env.IP, function () {
  var addr = server.address();
  console.log("Chat server running at", addr.address + ":" + addr.port);
});

// server listening to messages, and sending it back to everyone
// every time there is a new message, send a message back
// env Port just uses any port that's available