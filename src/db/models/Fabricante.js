const sequelize= require('../db')
const {Model, DataTypes} = require('sequelize')

class Fabricante extends Model{}

Fabricante.init({
    id_fab:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nombre_fab:{
        type:DataTypes.STRING,
        allowNull:false
    },
    direccion_fab:{
        type: DataTypes.STRING,
        allowNull:false
    },
    telefono_fab:{
        type: DataTypes.STRING,
        allowNull:false
    },
    fechanac_fab:{
        type: DataTypes.DATE,
        allowNull:false
    }
},{sequelize, modelName:'Fabricante',timestamps:false})

module.exports= Fabricante