//importar o express
const express = require('express')
//executar o express
const app = express()
//definir a porta de servidor local
const porta = 3535

//definir a pasta dos arquivos estaticos  (css, imagens, jquerry)
app.use(express.static('./assets'))

//definir o express como body parse
app.use(express.urlencoded({extended:false}))

//exportar o app e a porta
module.exports={app,porta}