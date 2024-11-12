const express = require('express');
const app = express();
const port = 3000;

const sequelize = require('./config/db');
const User = require('./config/models/user');
const Ponto = require('./config/models/ponto');

sequelize.sync({alter: true}).then(() => {
    console.log("BD sincrozinado");
}).catch((error) => {
    console.log("Erro ao sincronizar" + error);
});

// routes

// cadastrar usuario

app.post('/user', async (req, res) => {
   
});

// buscar todos os usuarios
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
    
});

// buscar usuario por id
app.get('/user/:id_usuario', async (req, res) => {
    User.findAll({
        where: {
            id_user: req.params.id_usuario
        }
    }).then((user) => {
        res.json(user);
    });
});







app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});