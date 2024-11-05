const sequelize = require('./config/db');
const {dataTypes} = require('sequelize');

//"user" model

const User = sequelize.define('user', {
    id_user:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: dataTypes.STRING,
        allowNull: false
    },
    email: {
        type: dataTypes.STRING,
        allowNull: false
    },
    login: {
        type: dataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: dataTypes.STRING,
        allowNull: false
    },
    permissao: {
        type: dataTypes.ENUM('admin', 'user'),
        allowNull: false
    }
},{
    timestamps: true
});

module.exports = User;