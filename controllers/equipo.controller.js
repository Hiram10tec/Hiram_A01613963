const Jugador = require('../models/jugador.model');

exports.get_crear = (request, response, next) => {
    response.render('crear', {
        username: request.session.username || '',
    });
};

exports.post_crear = (request, response, next) => {
    console.log(request.body);
    const mi_jugador = new Jugador(
        request.body.nombre, request.body.Posicion, request.body.edad, 
        request.body.imagen
    );
    mi_jugador.save();
    response.setHeader('Set-Cookie', 'ultimo_jugador=' + mi_jugador.nombre + '; HttpOnly');
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultimo_jugador);
    response.render('clases', {
        equipo: Jugador.fetchAll(),
        ultimo_jugador: request.cookies.ultimo_jugador || '',
        username: request.session.username || '',
    });
};
