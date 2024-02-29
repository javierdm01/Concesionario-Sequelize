const sequelize= require('../db')
const {Model, DataTypes} = require('sequelize')

class Cliente extends Model{}

Cliente.init({
    id_cli:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nombre_cli:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:'El nombre del cliente no puede ser null'
            },
            len:{
                args:[0,2],
                msg:'El rango del nombre debe de estar entre 0 y 2'
            }
        }
    },
    direccion_cli:{
        type: DataTypes.STRING,
        allowNull:false
    },
    telefono_cli:{
        type: DataTypes.STRING,
        allowNull:false
    },
    fechanac_cli:{
        type: DataTypes.DATE,
        allowNull:false
    }
},{sequelize, modelName:'Cliente',timestamps:false})

module.exports= Cliente