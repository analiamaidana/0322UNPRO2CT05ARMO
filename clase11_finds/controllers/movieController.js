const db = require('../database/models')
const movies = db.Movie //Este es el alias

const movieController = {
    index: function(req, res) {
        movies.findAll()
            .then( function (peliculas){
                //return res.send(peliculas)
                return res.render('index', { movies:peliculas });
            })
            .catch(error => console.log(error))
                  
    },
    show: function(req, res){
        let id = req.params.id

        movies.findByPk(id)
            .then( function (unaPelicula){
                return res.send(unaPelicula)
            })
    },
    new: function (req, res){
        //Deberá mostrar las últimas 5 películas ordenadas según su fecha de estreno. Cada título de película deberá ser un hipervínculo para ver el detalle de la misma.

        movies.findAll({
            order:[
                [ 'release_date', 'DESC' ]
            ],
            limit:5
        })
            .then( function(resultados){
                return res.send(resultados)
            })
    }


}

module.exports = movieController;