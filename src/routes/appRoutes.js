const router= require("express").Router()

const clientesRoutes= require('./clientesRoutes')


router.use('/concesionario/cliente',clientesRoutes)



module.exports= router