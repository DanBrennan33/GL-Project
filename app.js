var express = require('express');
var livereload = require('livereload');
var app = express();
app.use(express.static(__dirname));
app.listen(3000);
server = livereload.createServer();
server.watch(__dirname);
