const mongoose = require('mongoose');


//Todo Schema containing desc: description ,category and date
var TodoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dateof: {
        type: String,
        required: true
    }

});

const TodoData = mongoose.model('Todo',TodoSchema);

module.exports = TodoData;