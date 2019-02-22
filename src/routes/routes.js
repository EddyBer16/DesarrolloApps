const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Inicio'});
});

router.get('/sections/webDev', (req,res) => {
    res.render('sections/webDev', {title: 'Secciones | Desarrollo Web'});
});

router.get('/sections/mobileDev', (req,res) => {
    res.render('sections/mobileDev', {title: 'Secciones | Desarrollo Móvil'});
});

module.exports = router;