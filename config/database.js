const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://LorenzoAcquesta:lolo0506@cluster0.umqxy.mongodb.net/test')
}

module.exports = conexao
