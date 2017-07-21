var express = require('express'),
path = require('path'),
app = express(),
bodyParser = require('body-parser');

// app.use(express.bodyParser());
app.use(bodyParser.json());

app.use('/', express.static('src'))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});





module.exports = app;

app.listen(3010);