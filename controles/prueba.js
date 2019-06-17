;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let prueba = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then(data => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${data.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`//solo en desarollo esta linea no es produccion
        })
    })
}

let prueba1 = (req, res) => {
    return res.status(200).json({
        mensaje: "la prueba es OK21"
    })
}

let enviarParametro = (req,res) =>{
    let tabla = req.body.tabla
    let registros = JSON.parse(req.body.registros)
    console.log(`tabla:${tabla}`)
    console.log(`registro:${registros}`)
    console.log(JSON.stringify(registros))
    db(tabla).returning('id').insert(registros)
    .then(data => {
        return res.status(200).json({
            ok: true,
            datos: data,
            mensaje: `Se ingresaron ${data.length} registros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`//solo en desarollo esta linea no es produccion
        })
    })
}

module.exports = {
    prueba,
    prueba1,
    enviarParametro
}