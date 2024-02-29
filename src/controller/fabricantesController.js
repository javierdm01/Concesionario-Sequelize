const fabricanteService= require('../service/fabricantesService')


const creacionFabricante=async(req,res)=>{
    const creacionFabricante= await fabricanteService.createFabricante(req.body)
    res.json(creacionFabricante)
}

const searchFabricante=async(req,res)=>{
    const searchFabricante= await fabricanteService.searchFabricante(req.params.id)
    res.json(searchFabricante)
}

module.exports= {creacionFabricante,searchFabricante}