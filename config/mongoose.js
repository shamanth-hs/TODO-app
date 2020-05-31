const mongoose = require('mongoose');

//Connecting to mongoDB using mongoose
mongoose.connect('mongodb://localhost/todo_app');

const db = mongoose.connection;

//if error while connecting to mongoDb
db.on('error', console.error.bind(console,"Error Connecting to db "));


//if connected to mongoDb
db.once('open',function () {
    console.log('Connected to db ');
});