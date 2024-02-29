const clientesRouter=require('express').Router()

const clientesController=  require('../controller/clientesController')

clientesRouter.get('/',clientesController.getAllClientes)

clientesRouter.post('/',clientesController.createCliente)


module.exports=clientesRouter