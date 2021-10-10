var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var cookie = require('cookie')
var app = express()
 
app.use(cors())
app.use(bodyParser.json())
//app.use(cookies())
 
app.all('/test/:id', function (req, res, next) {
  
  res.append('Set-Cookie', 'anothercookie=yes')

  res.write(`\nPROTOCOL : ${req.protocol} ` )
  res.write(`\nMETHOD : ${req.method} ` )

  res.write("\nHEADERS\n")
  res.write(JSON.stringify(req.headers,null,2))

  res.write("\nPARAMS\n")
  res.write(JSON.stringify(req.params,null,2))

  res.write("\nQUERY\n")
  res.write(JSON.stringify(req.query,null,2))
  // res.write("\COOKIES\n")
  // res.write(JSON.stringify(req.cookies,null,2))

  res.write("\nBODY\n")
  res.write(JSON.stringify(req.body,null,2))
  res.send();
 
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

