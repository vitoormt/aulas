const servidor = require('./config/servidor')
const app = servidor.app
const porta = servidor.porta

//importar a rota index.js
const index = require('./routes/index')(app)

//importar o consgin e configurar
const consgin = require('consign')
consgin().include('./routes').into(app)

app.listen(porta,()=>{
    console.log("http://localhost:"+porta)
})