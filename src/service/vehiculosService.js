const { where } = require('sequelize')
const Vehiculos= require('../db/models/Vehiculo')



const getAllVehiculos=async()=>{
    const vehiculos= await Vehiculos.findAll()
    return vehiculos
}
const getOneVehicle=async(nombre)=>{
    const oneVehicle= await Vehiculos.findOne({
        where: {
            nombre_veh: nombre
        }
    })
    if(!oneVehicle) return 'No se ha encontrado ese vehiculo'
    return oneVehicle
}
const modificateVehicle=async(req)=>{
    //Preguntar si se puede modificar las foreing key y como hacerlo
    const modificateVehicle= await Vehiculos.update({nombre_veh: req.nombre_veh,unidades_veh: req.unidades_veh,precio_veh: req.precio_veh,fabricanteIdFab: req.fabricanteIdFab},{
        where:{
            id_veh: req.id_veh
        }
    })
    return modificateVehicle
    return 'Vehiculo modificado correctamente'
}

module.exports= {getAllVehiculos, getOneVehicle,modificateVehicle}