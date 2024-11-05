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

app.get('/', (req, res) => {
    res.send("deu certo");
});

app.get('/teste', (req, res) => {
    res.send("deu certo, retornei algo");
});

app.get('/teste/:id', (req, res) => {
    res.send("deu certo, retornei algo com id");
});

app.post('/testepost', (req, res) => {
    res.send("deu certo, retornei algo com post");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});