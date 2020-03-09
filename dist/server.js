"use strict";

var express = require('express');

var path = require('path');

var app = express();
var router = express.Router();
var port = 3000;
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html')); //__dirname : It will resolve to your project folder.
}); //add the router

app.use('/', router);
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});