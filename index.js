/**
 * Created by ridel1e on 15/08/16.
 */

/**
 * Created by ridel1e on 12/08/16.
 */

var express, server;

express = require('express');

server = express();

server.set('port', 4000);
server.use(express.static(__dirname));

server.listen(server.get('port'), function () {
  console.log("server listening on port: "
    + server.get('port'));
});