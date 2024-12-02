const express = require('express');
const router = express.Router();
const { Pedido } = require("../models")

router.get('/', (_,res)=>{
    Pedido.find({}).then((pedidos) => {
        res.render('home/index', {
            pedidos:pedidos,
        });
    });
});

module.exports = router;