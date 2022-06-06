var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')

let multer = require('multer');
let path = require('path');

//Configurar multer.
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/avatars')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
    //Las carpetas deben existir.
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })



/* GET users listing. */
router.get('/register', userController.create); //Muestra el form registro al usuario
router.post('/store', upload.single('avatar'), userController.store); //Procesa los dato recibido en el form
router.get('/login', userController.login);
router.post('/login', userController.signIn);
router.post('/logout', userController.logout)

module.exports = router;
