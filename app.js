var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

process.stdin.resume();
process.stdin.on('data', function(data){
  data = data.toString()
  console.log(data)
  io.sockets.emit('data', data);
});
