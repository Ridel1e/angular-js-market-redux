/**
 * Created by ridel1e on 15/08/16.
 */

var apiProxy, apiForwardingUrl, express, httpProxy, server;

express = require('express');
httpProxy = require('http-proxy');

apiProxy = httpProxy.createProxyServer({changeOrigin: true});
apiForwardingUrl = 'http://127.0.0.1:5984/';
server = express();

server.set('port', 4000);
server.use(express.static(__dirname));

server.all("*", function (req, res) {
  apiProxy.web(req, res, { target: apiForwardingUrl });
});

apiProxy.on('error', function (e) {
  console.log(e);
});

server.listen(server.get('port'), function () {
  console.log("server listening on port: "
    + server.get('port'));
});