const { Schema } = require('mongoose');

const Pedido = new Schema({
    id:{
        type: Number,
        required: true
    },
    cliente:{
        nome:{
            type: String,
            required: true
        },
        sobrenome:{
            type: String,
            required: true
        },
        celular:{
            type: String,
            required: true
        }
    },
    endereco:{
        type: String,
        required: true
    },
    pizzas:[
        {
            sabor:{
                type: String,
                required: true
            },
            tamanho:{
                type: String,
                required: true,
                enum:["Pequeno","Médio","Grande"]
            },
            quantidade:{
                type: Number,
                required: true
            },
            observacao:{
                type: String,
                required: false
            }
        }
    ],
    metodoDePagamento:{
        type: String,
        required: true,
        enum:["PIX","Cartão de Crédito","Cartão de Débito","Dinheiro"]
    },
    total:{
        type: Number,
        required: true
    },
    pago:{
        type: Boolean,
        required: true
    },
    entregue:{
        type:Boolean,
        required: true
    }
});

module.exports = Pedido;