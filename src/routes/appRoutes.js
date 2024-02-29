const router= require("express").Router()

const clientesRoutes= require('./clientesRoutes')
const vehiculoRoutes= require('./vehiculosRoutes')
const fabricanteRoutes= require('./fabricantesRoutes')


router.use('/concesionario/cliente',clientesRoutes)
router.use('/concesionario/vehiculos',vehiculoRoutes)
router.use('/concesionario/fabricante',fabricanteRoutes)


module.exports= router