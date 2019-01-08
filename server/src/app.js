const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var routes = require('../routes/routes'); // Imports routes for the products

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// DB Setup
var mongoose = require('mongoose');

var DATABASE_URL = process.env.DATABASE_URL || 'http://localhost'
mongoose.connect(`mongodb://${DATABASE_URL}/posts`);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.use('/', routes);



app.listen(process.env.PORT || 8081)
