const sequelize= require('../db')
const {Model, DataTypes}= require('sequelize')

class Vehiculo extends Model{}

Vehiculo.init({
    id_veh:{
        type: DataTypes.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    nombre_veh:{
        type: DataTypes.STRING,
        allowNull:false
    },
    unidades_veh:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    precio_veh:{
        type: DataTypes.FLOAT,
        allowNull:false
    }
},{modelName:'Vehiculo', sequelize, timestamps:false})

module.exports= Vehiculo