const express = require('express');
const router = express.Router();

router.get('/', (_,res)=>{
    res.render('home/index',{
        //...
    });
});

module.exports = router;