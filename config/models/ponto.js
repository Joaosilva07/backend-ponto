const sequelize = require('./config/db');
const {dataTypes} = require('sequelize');

//"ponto" model

const Ponto = sequelize.define('ponto', {
    id_ponto: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: dataTypes.ENUM('entrada', 'saida', 'intervalo', 'volta', 'ausencia'),
        allowNull: false
    },
    comentario: {
        type: dataTypes.STRING,
        allowNull: true
    },
    anexo: {
        type: dataTypes.STRING,
            allowNull: true
        },
        data_hora: {
            type: dataTypes.DATE,
            allowNull: false
        },
        passado: {
            type: dataTypes.BOOLEAN,
            allowNull: true
        },
        localizacao: {
            type: dataTypes.STRING,
        allowNull: true
    }

    

},{
    timestamps: true
});

module.exports = Ponto;