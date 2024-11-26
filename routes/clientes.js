const express = require('express');
const { Cliente } = require('../models')

const router = express.Router();

router.get('/', (_,res) => {
    Cliente.find({}).then((cliente) => {
        res.render('clientes/index', {
            clientes: cliente,
        });
    });
});

module.exports = router;