const mongoose = require('mongoose');

const clienteSchema = require('./cliente');
const pedidoSchema = require('./pedido');

const Cliente = mongoose.model('Cliente', clienteSchema);
const Pedido = mongoose.model('Pedido', pedidoSchema);

const connect = () =>{


    mongoose.connect('mongodb://localhost:27017/pizzadmin');
}

module.exports = {
    connect,
    Pedido,
    Cliente,
}