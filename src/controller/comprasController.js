const compraService= require('../service/comprasService')


const createNewCompra=async(req,res)=>{
    const createNewCompra= await compraService.createNewCompra(req.body)
    res.json(createNewCompra)
}

const getAllCompras=async(req,res)=>{
    const getAllCompras= await compraService.getAllCompras()
    res.json(getAllCompras)
}


module.exports= {createNewCompra,getAllCompras}