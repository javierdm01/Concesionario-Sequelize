const Fabricante= require('./models/Fabricante')
const Cliente= require('./models/Cliente')
const Vehiculo= require('./models/Vehiculo')
const Compras= require('./models/Compras')
const Usuario= require('./models/Usuario')

//Relacion 1 : N
Fabricante.hasMany(Vehiculo)
Vehiculo.belongsTo(Fabricante)

//Relacion M : N
Vehiculo.belongsToMany(Cliente, {through: Compras})
Cliente.belongsToMany(Vehiculo,{through: Compras})

//Relacion 1 : N
Vehiculo.hasMany(Compras)
Compras.belongsTo(Vehiculo)

Cliente.hasMany(Compras)
Compras.belongsTo(Cliente)

//En estos casos cuando tenemos una relacion N:M con una 
//tabla en medio, primero hacemos la relacion N:M entre
//las 2 tablas y despues una tabla 1:N entre la tabla
//intermedia y las demas tablas.