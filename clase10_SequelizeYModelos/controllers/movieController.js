const db = require('../database/models')
const movies = db.Movie //Este es el alias

const movieController = {
    index: function(req, res) {
        movies.findAll()
            .then( function (peliculas){
                res.send(peliculas)
                //return res.render('index', { title: 'Express' });
            })
            .catch(error => console.log(error))
      
    }


}

module.exports = movieController;