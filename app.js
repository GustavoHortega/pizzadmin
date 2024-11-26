//importa dependencias.
const express = require('express');
const path = require('path');

//importa routers.
const routerHome = require('./routes/home');

const app = express();
const port = 3000;

//Config EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//routes.
app.use('/', routerHome);

//Arquivos estáticos.
app.use(express.static('public'));

//Escuta na porta 3000.
app.listen(port, ()=>{
    console.log(`Servido ouvindo na porta: ${port}.`)
})