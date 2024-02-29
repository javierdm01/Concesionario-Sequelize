const Cliente= require('../db/models/Cliente')

//Obtener todos los clientes - SELECT * FROM CLIENTE
const getAllClientes=async()=>{
    const clientes= await Cliente.findAll()
    return clientes
}

module.exports= {getAllClientes}