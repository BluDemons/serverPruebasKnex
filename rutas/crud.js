;
const express = require('express')
let api = express.Router(),
  crudControl = require('../controles/crud')

api.get('/leer', crudControl.leer)
api.get('/getDatos', crudControl.getDatos)
api.post('/post_datos', crudControl.postDatos)

module.exports = api