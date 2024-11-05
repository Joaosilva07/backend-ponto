const sequelize = require('../db');
const { DataTypes } = require('sequelize');

// "user" model

const User = sequelize.define('user', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = User;