const express= require("express")

const app= express()
const bodyParser= require("body-parser")

const sequelize= require('./db/db')
require('./db/associations')

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))



const router= require('./routes/appRoutes')
app.use('/', router)

const PORT= process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log('Servidor escuchando en el puerto '+PORT+' ✅');


    sequelize
        .sync({ force: false})
        .then(()=> console.log('Conexion a la base de datos '+sequelize.getDatabaseName()))
        .then(()=> console.log('Tablas sincronizadas'))
        .catch(()=> console.log('Error'))
})