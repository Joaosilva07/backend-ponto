const express = require
const app = express()
const port = 3000

// routes

app.get('/', (req, res) => {
    res.send("deu certo")
})

// reotrnar algo

app.get('/teste', (req, res) => {
    res.send("deu certo, retornei algo")
})

app.get('/teste/:id', (req, res) => {
    res.send("deu certo, retornei algo com id")
})

app.post('/testepost', (req, res) => {
    res.send("deu certo, retornei algo com post")
})

