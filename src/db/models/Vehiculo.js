const sequelize= require('../db')
const {Model, DataTypes}= require('sequelize')

class Vehiculo extends Model{}

Vehiculo.init({
    id_fab:{
        type: DataTypes.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    nombre_fab:{
        type: DataTypes.STRING,
        allowNull:false
    },
    direccion_fab:{
        type: DataTypes.STRING,
        allowNull:false
    },
    telefono_fab:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{modelName:'Vehiculo', sequelize, timestamps:false})

module.exports= Vehiculo