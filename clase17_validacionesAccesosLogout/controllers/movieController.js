const db = require('../database/models');
const movies = db.Movie; //Este es el alias
const genres = db.Genre;

const movieController = {
    index: function(req, res) {
        movies.findAll({
            include: [
                {association: 'genre'}
            ]
        })
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
    },
    create: function(req, res){
        //renderizar el form para crear una película.
          if(req.session.user == undefined){
            return res.redirect('/users/login')
        } else {  
            //Conseguir todos los géneros de la base de datos
            genres.findAll()
                .then( function(genres){
                    return res.render('movieNew', {generos: genres})
                })
                .catch(error => console.log(error))
        }

    },
    store: function(req, res){
        //Obtener los datos del formulario y armar el objeto literal que quiero guardar
        let movie = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id,
        }
        //Guardar la info en la base de datos
        movies.create(movie)
            .then( function(respuesta){ //En el parámetro recibimos el registro que se acaba de crear en la base de datos.
                //return res.send(respuesta)
                //redirigir
                return res.redirect('/')
            })
            .catch( error => console.log(error))

    }


}

module.exports = movieController;