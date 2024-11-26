const mongoose = require('mongoose');

const connect = () =>{
    mongoose.connect('mongodb://localhost:27017/pizzadmin');
}

module.exports={
    connect,
}