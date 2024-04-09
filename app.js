const express = require('express');
const app = express();
const lab11modulo1 = require('./routes/lab11modulo1');

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, 
  saveUninitialized: false,
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(lab11modulo1);

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); 
});

const cookieParser = require('cookie-parser');
app.use(cookieParser());


const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        callback(null, Number(new Date()).toString() + file.originalname);

    },
});

app.use(multer({ storage: fileStorage }).single('imagen')); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//Protección contra ataques de CSRF
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 

const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);

const rutasClases = require('./routes/clases.routes');
app.use('/', rutasClases);

app.use((request, response) => {
  response.status(404);
  response.sendFile(path.join(__dirname, '404.html')); //Manda la respuesta
});

app.listen(3002, () => {
  console.log('Servidor escuchando en el puerto 3002');
});




