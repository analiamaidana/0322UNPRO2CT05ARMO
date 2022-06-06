const db = require('../database/models');
const bcrypt = require('bcryptjs');

const users = db.User;

const userController = {
    create: function(req, res){
        //mostrar el form de registro
        //Controlar que el usario no esté logueado
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('register');
        }
        
    },

    store: function(req, res){
        //Obtener los datos del formulario y armar el objeto literal que quiero guardar
        let user = {
            email: req.body.email,
            name:'unUserNameCualquiera',
            password: bcrypt.hashSync(req.body.password, 10),//vamos a hashear la contraseña que viene del formulario.
            avatar: req.file.filename
        }
        //return res.send (user)
        //Guardar la info en la base de datos
        users.create(user)
            .then( function(userGuardado){ //En el parámetro recibimos el registro que se acaba de crear en la base de datos.
                //return res.send(userGuardado)
                //redirigir
                return res.redirect('/')
            })
            .catch( error => console.log(error))
    },

    login: function(req, res){
        //mostrar el form de registro
        //Chequear que un usario esté logueado
          if(req.session.user != undefined){
            return res.redirect('/')
        } else {  
            return res.render('login');
        }
    },

    signIn: function(req, res){
        //verificar el que el mail exista en labase de datos.
            //Buscar al usuario usando el email del form de login.
            //Del usuario conseguido chequear que la contraseña del formulario coincida con la guardad el base.
            //USamos compareSync 
                    //Si las contraseñas coinciden avisemos con mensaje que todo está ok. Cuando sepamos loguear redireccionamos a la home con el proceso de login completo.
                //Controlar que el usario no esté logueado
      
        users.findOne({
            where: [{email: req.body.email}]
        })
            .then(function(user){
                if(user){
                    req.session.user = user.dataValues;
                    //Si el usuario tildó recordarme creo la cookie
                    res.cookie('userId',user.dataValues.id,{maxAge: 1000*60*100} )
                }
                console.log(req.session.user);
                return res.redirect('/')

            })
            .catch(error => console.log(error))
        
    },
    
    logout: function(req, res){
        //destruir session
        req.session.destroy();

        //Eliminar cookie si existe.
        if(req.cookies.userId !== undefined){
            res.clearCookie('userId')
        }

        return res.redirect('/');

    }


}

module.exports = userController;