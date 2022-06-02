module.exports = function (sequelize, dataTypes){

    //Definir un alias. El alias me permite identificar al modelo cuando lo usamos en el controlador.
    let alias = 'Movie';

    //Columnas y sus características
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        title:{
            type:dataTypes.STRING
        },
        rating:{
            type:dataTypes.DECIMAL
        },
        awards:{
            type:dataTypes.INTEGER
        },
        release_date:{
            type:dataTypes.DATE
        },
        length:{
            type:dataTypes.INTEGER
        },
        genre_id:{
            type:dataTypes.INTEGER
        },
    }

    //Configuraciones adicionales
    let config = {
        tableName: 'movies', //Nombre de la tabla en la base de datos.
        timestamps: false, //Si la tabla no tiene los campos createdAt y updatedAt
        underscored: true, //Si la tabla tiene columnas con nombres usando guiones bajos.
    }

    const Movie = sequelize.define(alias, cols, config);

    //Relaciones entre tablas.
   

    return Movie;
}