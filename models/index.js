const mongoose = require('mongoose');

const clienteSchema = require('./cliente');

const Cliente = mongoose.model('Cliente', clienteSchema);

const connect = () =>{


    mongoose.connect('mongodb://localhost:27017/pizzadmin');
}

module.exports = {
    connect,
    Cliente,
}