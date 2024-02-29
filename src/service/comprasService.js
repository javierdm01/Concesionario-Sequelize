const Cliente = require('../db/models/Cliente');
const Compras= require('../db/models/Compras');
const Vehiculo = require('../db/models/Vehiculo');


const createNewCompra=async(param)=>{
    try {
        
        const newCompra= await Compras.create(param)
        console.log(newCompra);
        return newCompra
    } catch (error) {
        return error.errors[0].message
    }
}

const getAllCompras=async()=>{
    const getAllCompras= await Compras.findAll({
        include:[{
            model:Vehiculo,
            attributes:["nombre_veh"]
        },
        {
            model: Cliente,
            attributes:["nombre_cli"]
        }],
        attributes:["fecha_compra","precio_compra"]
    })
    return getAllCompras
}

module.exports= {createNewCompra,getAllCompras}