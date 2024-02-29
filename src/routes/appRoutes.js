const router= require("express").Router()

const clientesRoutes= require('./clientesRoutes')
const vehiculoRoutes= require('./vehiculosRoutes')


router.use('/concesionario/cliente',clientesRoutes)
router.use('/concesionario/vehiculos',vehiculoRoutes)



module.exports= router