const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
  const error = request.session.error || '';
  request.session.error = '';
  response.render('login', {
      username: request.session.username || '',
      registro: false,
      csrfToken: request.csrfToken(),
      error: error, 
  });
};

exports.post_login = (request, response, next) => {
  Usuario.fetchOne(request.body.username)
      .then(([usuarios, fieldData]) => {
          if (usuarios.length == 1) {
              const usuario = usuarios[0];
              bcrypt.compare(request.body.password, usuario.password)
                  .then((doMatch) => {
                      if(doMatch) {
                            request.session.username = usuario.name;
                            request.session.isLoggedIn = true;
                            response.redirect('/equipo');
                        } else {
                            request.session.error = "Usuario y/o contraseña incorrectos";
                            response.redirect('/users/login');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                request.session.error = "Usuario y/o contraseña incorrectos";
                response.redirect('/users/login');
            }
        })
        .catch((error) => {console.log(error);});
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registro: true,
        csrfToken: request.csrfToken(),
    });
};

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(
        request.body.username, request.body.name, request.body.password
    );
    nuevo_usuario.save()
        .then(() => {
            response.redirect('/users/login');
        })
        .catch((error) => {
            console.log(error);
        });
};