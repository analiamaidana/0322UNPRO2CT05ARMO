var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')

/* GET users listing. */
router.get('/register', userController.create); //Muestra el form registro al usuario
router.post('/store', userController.store); //Procesa los dato recibido en el form
router.get('/login', userController.login);
router.post('/login', userController.signIn);

module.exports = router;
