const clientesRouter=require('express').Router()

const clientesController=  require('../controller/clientesController')

clientesRouter.get('/',clientesController.getAllClientes)




module.exports=clientesRouter