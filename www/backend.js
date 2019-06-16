//this is just testing a sever right now install node and type "node backend in termal" then goto http://localhost:8000/index.html maybe diffrent when made into an app
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log('connected!');
    return res.end();

  });
}).listen(8000);
