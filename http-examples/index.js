const http = require('http');
var url = require('url');

// let methods = http.METHODS;
// methods.forEach(m => console.log(m));

// let codes = http.STATUS_CODES;
// Object.entries(codes).forEach(c => console.log(c));




let server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
});

const  PORT=8080;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));