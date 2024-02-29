const vehiculoRouter= require('express').Router()

const vehiculoController=require('../controller/vehiculosController')


vehiculoRouter.get('/',vehiculoController.getAllVehiculos)
vehiculoRouter.get("/:nombre", vehiculoController.getOneVehicle)
vehiculoRouter.put('/',vehiculoController.modificateVehicle)

module.exports=vehiculoRouter