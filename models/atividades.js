//importar o mongoose
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informações do usuário
const modelo = mongoose.Schema({
    data:Date,
    tipo:String,
    entrega:String,
    disciplina:String,
    instrucoes:String,
    usuario:String,
    status:{type:Number,default:0}
})

//gravar a estrutura na model usuários
const atividades = mongoose.model('atividades',modelo)

//exportar os dados para o acesso externo
module.exports = atividades