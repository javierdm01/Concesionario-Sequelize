const Cliente= require('../db/models/Cliente')

//Obtener todos los clientes - SELECT * FROM CLIENTE
const getAllClientes=async()=>{
    const clientes= await Cliente.findAll()
    return clientes
}

// Crear un cliente - INSERT INTO CLIENTE ("DATA") VALUES ("VALUES")
const createCliente=async(body)=>{
    const clientes= await Cliente.create(body)
    return 'Cliente insertado correctamente'
}

module.exports= {getAllClientes,createCliente}