const express = require('express');
const router = express.Router();
const { Pedido } = require("../models")

router.get('/', (_,res)=>{
    Pedido.find({}).then((pedidos) => {
        res.render('painel/index', {
            pedidos:pedidos,
        });
    });
});

module.exports = router;