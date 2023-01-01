var express = require('express')
var app = express();

const homeRoutes = require('./routes/home');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(homeRoutes);
app.listen(8081);
console.log("server running 8081"); 