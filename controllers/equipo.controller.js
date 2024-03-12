const Jugador = require('../models/jugador.model');

exports.get_crear = (request, response, next) => {
    response.render('crear');
};

exports.post_crear = (request, response, next) => {
    console.log(request.body);
    const mi_jugador = new Jugador(
        request.body.nombre, request.body.Posicion, request.body.edad, 
        request.body.imagen
    );
    mi_jugador.save();
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    response.render('clases', {
        equipo: Jugador.fetchAll(),
    });
};
