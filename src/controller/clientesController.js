const clienteService= require('../service/clientesService')

const getAllClientes=async(req,res)=>{
    const allClientes= await clienteService.getAllClientes()
    res.json(allClientes)
}
const createCliente=async(req,res)=>{
    const cliente= await clienteService.createCliente(req.body)
    res.json(cliente)
}



module.exports={getAllClientes,createCliente}