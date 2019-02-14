const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Inicio'});
});

router.get('/webDevelopment', (req, res) => {
    res.render('pages/webDevelopment');
});

router.get('/mobileDevelopment', (req,res) => {
    res.render('pages/mobileDevelopment');
});

router.get('/sections/mobileDev', (req,res) => {
    res.render('sections/mobileDev', {title: 'Secciones | Desarrollo Móvil'});
});

module.exports = router;