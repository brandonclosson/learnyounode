strftime = require('strftime');
net = require('net');

server = net.createServer(function(socket) {
  socket.end(strftime(strftime('%Y-%m-%d %H:%M', Date.now()) + "\n"));
});

server.listen(process.argv[2]);