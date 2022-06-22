const atividades = require('../models/atividades')
const usuarios = require('../models/usuarios')

module.exports = (app)=>{
    //criar a rota para renderizar a view atividades
    app.get('/atividades',async(req,res)=>{
        //capturar o id da barra de endereço
        var id = req.query.id
        //buscar o nome na collection usuarios
        var user = await usuarios.findOne({_id:id})
        //buscar todas as atividades desse usuário
        var abertas = await atividades.find({usuario:id,status:0}).sort({data:1})
        //buscar todas as atividades desse usuário
        var entregues = await atividades.find({usuario:id,status:1}).sort({data:1})
        //buscar todas as atividades desse usuário
        var excluidas = await atividades.find({usuario:id,status:2}).sort({data:1})
        //console.log(buscar)
        // res.render('atividades.ejs',{nome:user.nome,id:user._id,dados:abertas,dadosx:excluidas,dadose:entregues})
        //abrir a view accordion
        //res.render('accordion.ejs',{nome:user.nome,id:user._id,dados:abertas,dadosx:excluidas,dadose:entregues})
        //abrir a view atividades2
         res.render('atividades2.ejs',{nome:user.nome,id:user._id,dados:abertas,dadosx:excluidas,dadose:entregues})

    })

    //gravar as informações do formulário na collection atividades
    app.post('/atividades',async(req,res)=>{
        //recuperando as informações digitadas
        var dados = req.body
        //exibindo o terminal
        // console.log(dados)
        //conectar com o database
        const conexao = require('../config/database')()
        //model atividades
        const atividades = require('../models/atividades')
        //salvar as informações do formulario no database
        var salvar = await new atividades({
            data:dados.data,
            disciplina:dados.disciplina,
            tipo:dados.tipo,
            entrega:dados.entrega,
            instrucoes:dados.orientacao,
            usuario:dados.id
        }).save()
        //redirecionar para a rota atividades
        res.redirect('/atividades?id='+dados.id)
    })

    //exluir atividades
    app.get("/excluir",async(req,res)=>{
        //recuperar o paramentro id da barra de endereço
        var id = req.query.id
        var excluir = await atividades.findOneAndUpdate(
            {_id:id},
            {status:2}
            )
        //redirecionar para a rota atividades
        res.redirect('/atividades?id='+excluir.usuario)

    })

    app.get("/entregue",async(req,res)=>{
        //recuperar o paramentro id da barra de endereço
        var id = req.query.id
        var entregue = await atividades.findOneAndUpdate(
            {_id:id},
            {status:1}
            )
        //redirecionar para a rota atividades
        res.redirect('/atividades?id='+entregue.usuario)

    })
    //criar a rota para a view alterar
    app.get('/alterar',async(req,res)=>{
        //capturar o id(atividade) da barra de endereço
        var id = req.query.id
        //buscar a atividade que sera alterada
        var alterar = await atividades.findOne({_id:id})
        //buscar o nome na collection usuarios
        var user = await usuarios.findOne({_id:alterar.usuario})
        //abrir a view atividades 2
         res.render('alterar.ejs',{nome:user.nome,id:user._id,dados:alterar})

    })

    //criar a rota para gravas as alterações na atividade
    app.post('/alterar', async(req,res)=>{
        //qual atividade será atualizada?
        //quais são as informações digitadas
        var infos = req.body
        //garavar as informações na collection atividades
        var garvar = await atividades.findOneAndUpdate(
            {_id:infos.id_a},
            {
                data:infos.data,
                tipo:infos.tipo,
                disciplina:infos.disciplina,
                entrega:tipos.entrega,
                instrucoes:infos.orientacao
            }    
        )
        res.redirect('/atividades?id='+infos.id)
    })
}

