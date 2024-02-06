
//Modules
require('dotenv').config()

const express = require ('express');
const express_layout = require('express-ejs-layouts');
const  connectDb = require('./server/config/db')
const session = require('express-session');
const passport = require('passport')
const mongoStore = require('connect-mongo')


const app = express();

const PORT = process.env.PORT || 5000;


// Authentication

app.use(passport.initialize());
//app.use(passport.session())


// COnnecting requires that a port is specfied before using express-ejs-layouts to connect to the server.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connect to Database
connectDb();

// Static files
app.use(express.static('public'));

//Template engne

app.use(express_layout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs')


// ROUTING

app.use('/', require('./server/router/auth'));
app.use('/', require('./server/router/index'));
app.use('/dashboard', require('./server/router/dashboard'));


// Handle 404
app.get('*', (req, res)=>{
    res.status(404).render('404');
})


// Run Server

app.listen(PORT,()=>{
    console.log(`Running on on PORT:${PORT}`)
})