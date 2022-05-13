var express = require('express');
var router = express.Router();
let movieController = require('../controllers/movieController')

/* GET home page. */
router.get('/', movieController.index);
router.get('/movie/:id', movieController.show);
router.get('/movies/new', movieController.new);

module.exports = router;
