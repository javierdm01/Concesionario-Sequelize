const sequelize = require('../db')
const {Model, DataTypes} = require('sequelize')


class Usuario extends Model{}

Usuario.init({
    id_user:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nombre_user:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellidos_user:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email_user:{
        type: DataTypes.STRING,
        allowNull:false
    },
    pasword_user:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{sequelize,modelName:'Usuario',timestamps:false})

module.exports= Usuario