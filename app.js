//importa dependencias.
const express = require('express');
const path = require('path');

//importa routers.
const routerHome = require('./routes/home')

const app = express();
const port = 3000;

//Config EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//routes...to do
app.use('/', routerHome);

app.listen(port, ()=>{
    console.log(`Servido ouvindo na porta: ${port}.`)
})