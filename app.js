//1 Invocamos express
const express = require('express');
const app = express();

//2 Seteamos urlencode y json para capturar datos de formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//3 configuramos dotenv para las variables de entorno
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//4 Seteamos el directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));
// console.log(__dirname + '/public');

//5 Invocamos el motor de plantilla
app.set('view engine', 'ejs');

//6 invocamos bcryptjs para encriptar contraseñas
const bcryptjs = require('bcryptjs');

//7 VAriables de Sesion 
const session = require('express-session');
app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true,
}));

//8 Invocamos al modulo de BD
const connection = require('./database/db');

//9 Rutas
app.get('/', (req, res) => {
    res.render('index');
}); 

app.get('/home', (req, res) => {
    res.render('home');
});
//9.1 Rutas de Usuarios
app.get('/users', (req, res) =>{
    res.render('users/usuarios');
});

app.get('/users/new', (req, res) =>{
    res.render('users/new');
});

app.post('/auth', async (req, res) =>{
    // const user = req.body.user;
    // const pass = req.body.pass;

    // let passwordHash = await bcryptjs.hash(pass, 8);

});

//configuramos puerto
app.listen(3000, (req, res) => {
    console.log('Servidor en linea http://localhost:3000');
});
