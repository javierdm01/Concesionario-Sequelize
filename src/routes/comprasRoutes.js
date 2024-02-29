const comprasRouter= require('express').Router()
const comprasController= require('../controller/comprasController')


comprasRouter.post('/',comprasController.createNewCompra)
comprasRouter.get('/',comprasController.getAllCompras)

module.exports=comprasRouter