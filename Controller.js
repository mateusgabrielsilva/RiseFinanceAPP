// constantes

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./models');
const { response } = require('express');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes 

// Create
app.post('/create', async(req,res)=>{
    let reqs = await model.User.create({
        'name': req.body.nameUser,
        'email': req.body.emailUser,
        'password': req.body.passwordUser,
        'createdAt': new Date(),
        'updatedAt': new Date(),
    });
    if(reqs){
        res.send(JSON.stringify('Usuário cadastrado com sucesso!'))
    }
});

// Read Login
app.post('/read', async (req, res) => {
    const email = req.body.emailUser
    const password = req.body.passwordUser

    let read = await model.User.findAll({
        where: {
            email: email,
            password: password
        }
    })
    const emailDb = read[0].email
    const passwordDb = read[0].password
    if(email == emailDb && password == passwordDb) {
        res.send(JSON.stringify('sucesso'))
    }else{
        console.log('Usuario invalido')
    }
    
});

let port = process.env.PORT || 3000;
app.listen(port, (req,res)=>{
    console.log('Servidor Rodando')
})