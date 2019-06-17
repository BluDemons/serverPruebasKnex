;
let getDatos = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    //let id = req.query.id
    db(tabla).where({id:1}).select(campo)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
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

let insertDatos = (req,res) =>{
    let tabla= req.body.tabla
    let campo = req.body.campo 
    let columna = req.body.columna
    db(tabla).returning(columna).insert(campo)
    .then(data => {
        return res.status(200).json({
            ok: true,
            datos: data,
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

let deleteDatos = (req,res) =>{
    let tabla= req.body.tabla
    let campo = req.body.campo 
    db(tabla).where(campo,false).del()
    .then(data => {
        return res.status(200).json({
            ok: true,
            datos: data,
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

let updateDatos = (req,res) =>{
    let tabla= req.body.tabla
    let campo = req.body.campo 
    db(tabla).where(campo,1).update({
        descripcion:'femenino',
        thisKeyIsSkipped: undefined
    })
    .then(data => {
        return res.status(200).json({
            ok: true,
            datos: data,
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
