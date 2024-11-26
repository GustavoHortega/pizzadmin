const {Schema} = require('mongoose');

const Cliente = new Schema({
    informacoesPessoais:{
        nome:{
            type: String,
            required: true
        },
        sobrenome:{
            type: String,
            required:true
        }

    },
    informacoesDeContato:{
        celular:{
            type: Number,
            required:true,
            minlength:[11, "Por favor insira um número válido"]
        },
        email:{
            required: false,
            type: String
        }
    },
    informacoesDeEndereco:{
        logradouro:{
            type: String,
            required: true
        },
        numero:{
            type: Number,
            required: true
        },
        bairro:{
            type: String,
            required: true
        },
        cidade:{
            type: String,
            required: true
        },
        complemento:{
            type: String,
            required: false
        }
    }
});

module.exports = Cliente;