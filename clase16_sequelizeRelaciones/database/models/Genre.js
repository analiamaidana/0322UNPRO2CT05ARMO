module.exports = function (sequelize, dataTypes){

    //Definir un alias. El alias me permite identificar al modelo cuando lo usamos en el controlador.
    let alias = 'Genre';

    //Columnas y sus características
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name:{
            type:dataTypes.STRING
        },
        ranking:{
            type:dataTypes.INTEGER
        },
        active:{
            type:dataTypes.INTEGER
        },
    }

    //Configuraciones adicionales
    let config = {
        tableName: 'genres', //Nombre de la tabla en la base de datos.
        timestamps: false, //Si la tabla no tiene los campos createdAt y updatedAt
        underscored: true, //Si la tabla tiene columnas con nombres usando guiones bajos.
    }

    const Genre = sequelize.define(alias, cols, config);

    //Relaciones entre tablas.


    return Genre;
}