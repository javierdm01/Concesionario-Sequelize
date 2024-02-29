const router= require("express").Router()

const clientesRoutes= require('./clientesRoutes')
const vehiculoRoutes= require('./vehiculosRoutes')
const fabricanteRoutes= require('./fabricantesRoutes')
const comprasRouter= require('./comprasRoutes')

router.use('/concesionario/cliente',clientesRoutes)
router.use('/concesionario/vehiculos',vehiculoRoutes)
router.use('/concesionario/fabricante',fabricanteRoutes)
router.use('/concesionario/compras',comprasRouter)

module.exports= router