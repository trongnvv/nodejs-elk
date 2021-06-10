'use strict';

var net = require('net');

var logHost = '127.0.0.1'
  , logPort = 28777
  , sender = require('os').hostname();

var conn = net.createConnection({host: logHost, port: logPort}, function() {
  var message = {
    '@tags': ['nodejs', 'test']
  , '@message': 'tcp test ' + Math.floor(Math.random() * 10000)
  , '@fields': {'sender': sender}
  }
  conn.write(JSON.stringify(message));
  process.exit(0);
})
.on('error', function(err) {
  console.error(err);
  process.exit(1);
});