// config databse connection

const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('ponto','postgres','ceub123456', { 
    host: 'localhost',
    dialect: 'postgres'
})
