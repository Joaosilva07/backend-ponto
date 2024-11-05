const sequelize = require('../db');
const { DataTypes } = require('sequelize');

// "ponto" model

const Ponto = sequelize.define('ponto', {
    id_ponto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.ENUM('entrada', 'saida', 'intervalo', 'volta', 'ausencia'),
        allowNull: false
    },
    comentario: {
        type: DataTypes.STRING,
        allowNull: true
    },
    anexo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    data_hora: {
        type: DataTypes.DATE,
        allowNull: false
    },
    passado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    localizacao: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
});

module.exports = Ponto;