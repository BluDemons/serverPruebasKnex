;
const express = require('express')
let api = express.Router(),
  pruebaControl = require('../controles/prueba')

api.get('/prueba', pruebaControl.prueba)
api.get('/prueba1', pruebaControl.prueba1)
api.post('/enviar_parametro', pruebaControl.enviarParametro)

module.exports = api