const compraService= require('../service/comprasService')


const createNewCompra=async(req,res)=>{
    const createNewCompra= await compraService.createNewCompra(req.body)
    res.json(createNewCompra)
}


module.exports= {createNewCompra}