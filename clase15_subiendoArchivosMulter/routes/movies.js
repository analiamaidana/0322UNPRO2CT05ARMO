var express = require('express');
var router = express.Router();
let movieController = require('../controllers/movieController')

/* GET home page. */
router.get('/', movieController.index);
router.get('/movies/new', movieController.new);
router.get('/movies/create', movieController.create) //Ruta que muestr el form de carga.
router.post('/movies/store', movieController.store) //ruta que guarda datos.
router.get('/movie/:id', movieController.show);

module.exports = router;
