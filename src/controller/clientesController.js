const clienteService= require('../service/clientesService')

const getAllClientes=async(req,res)=>{
    const allClientes= await clienteService.getAllClientes()
    res.json(allClientes)
}


module.exports={getAllClientes}