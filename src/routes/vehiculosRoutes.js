const vehiculoRouter= require('express').Router()

const vehiculoController=require('../controller/vehiculosController')


vehiculoRouter.get('/',vehiculoController.getAllVehiculos)
vehiculoRouter.get("/:nombre", vehiculoController.getOneVehicle)
vehiculoRouter.put('/',vehiculoController.modificateVehicle)
vehiculoRouter.delete('/:id', vehiculoController.deleteVehicle)
module.exports=vehiculoRouter