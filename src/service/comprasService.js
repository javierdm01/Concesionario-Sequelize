const Compras= require('../db/models/Compras')


const createNewCompra=async(param)=>{
    try {
        
        const newCompra= await Compras.create(param)
        console.log(newCompra);
        return newCompra
    } catch (error) {
        return error.errors[0].message
    }
}

module.exports= {createNewCompra}