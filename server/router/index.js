const express = require('express');
const router =  express.Router();
const mainCOntroller = require('../controller/mainController');


/* APP ROUTES */

router.get('/', mainCOntroller.homepage)
router.get('/about', mainCOntroller.about)
router.get('/faq', mainCOntroller.faq)




module.exports= router