const vehiculosService= require('../service/vehiculosService')


const getAllVehiculos=async(req,res)=>{
    const allVehiculos= await vehiculosService.getAllVehiculos()
    res.json(allVehiculos)
}
const getOneVehicle=async(req,res)=>{
    const oneVehicle= await vehiculosService.getOneVehicle(req.params.nombre)
    res.json(oneVehicle)
}
const modificateVehicle=async(req,res)=>{
    const modificateVehicle= await vehiculosService.modificateVehicle(req.body)
    res.json(modificateVehicle)
}
const deleteVehicle=async(req,res)=>{
    const deleteVehicle= await vehiculosService.deleteVehicle(req.params.id)
    res.json(deleteVehicle)
}
module.exports={getAllVehiculos, getOneVehicle, modificateVehicle,deleteVehicle}