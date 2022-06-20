// importar o mongoose
const mongoose = require('mongoose')
//script de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://Vitor:Vitorr@cluster0.mabqy.mongodb.net/test')
}

//exportar as informações para acesso externo
module.exports = conn