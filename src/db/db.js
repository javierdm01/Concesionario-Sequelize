const {Sequelize}= require('sequelize')

const sequelize= new Sequelize('concesionarios','root','', {
    host:'localhost',
    dialect:'mysql'
})

module.exports= sequelize