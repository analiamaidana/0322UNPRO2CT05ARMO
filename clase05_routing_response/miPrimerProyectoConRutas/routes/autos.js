const express = require('express');
const router = express.Router();
const autos = require('../db/index')

router.get('/', function(req, res) {
    return res.send(autos.lista)
})

router.get('/brand/:brand', function(req, res) {
    // voy a querer tener un contenedor de datos (array ;) ) vacío
    let coincidencias = [];
    // Recorrer el listado de autos
    for (let i = 0; i < autos.lista.length; i++) {
        const auto = autos.lista[i];
        // En cada iteración quiero preguntarme si el auto en cuestión tiene como marca la marca ingresada en el parametro
        if (auto.marca.toLowerCase() === req.params.brand.toLowerCase()) {
            // Si el auto en cuestión coincide con la marca, lo agrego a la colección (array)
            coincidencias.push(auto)
        }// Sino, no hago nada        
    }
    // Una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al pricnipio esta vacio o completo
    if (coincidencias.length !== 0) {
        // Si NO está vacía, quiero enviarle la colección
        return res.send(coincidencias)
    } else {
        // Si esta vacía, quieren enviarle un msg al usuario indicando que no se encontraron resultados
        return res.send('No encontramos coincidencias')
    }
})

router.get('/color/:color', function (req, res) {
    
})

module.exports = router