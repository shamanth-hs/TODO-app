
//Get all required Packages
const express = require('express');
const path = require('path');
const db = require('./config/mongoose');

const app = express();
const port = 8000;//Port for server to run

//setting view engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname,"views"));

//Setting MiddleWares
app.use(express.static('assets'))
app.use(express.urlencoded())

//Route all incoming calls
app.use('/',require('./routes'))

//Start listening to request
app.listen(port,function (err) {
    if(err){console.log(err);return;}
    console.log("Server is up and running in port",port)
});