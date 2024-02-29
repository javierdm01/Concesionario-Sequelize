const Fabricante= require('../db/models/Fabricante')
const Vehiculo=require('../db/models/Vehiculo')

const createFabricante=async(parametros)=>{
    try {
        const creacionFabricante= await Fabricante.create(parametros)
        return creacionFabricante
    } catch (error) {
        return error.errors[0].message
    }

}

const searchFabricante=async(idFab)=>{
    const searchFabricante= await Fabricante.findByPk(idFab,{
        include:[{
            model:Vehiculo,
            attributes:["nombre_veh","unidades_veh","precio_veh"]
        }],
        attributes:["nombre_fab"],
         
    })
    return searchFabricante
}

module.exports= {createFabricante,searchFabricante}