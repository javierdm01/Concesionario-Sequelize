const comprasRouter= require('express').Router()
const comprasController= require('../controller/comprasController')


comprasRouter.post('/',comprasController.createNewCompra)


module.exports=comprasRouter