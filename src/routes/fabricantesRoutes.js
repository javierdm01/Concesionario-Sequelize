const fabricanteRouter= require('express').Router()

const fabricanteController= require('../controller/fabricantesController')


fabricanteRouter.post('/', fabricanteController.creacionFabricante)

fabricanteRouter.get('/:id',fabricanteController.searchFabricante)

module.exports= fabricanteRouter