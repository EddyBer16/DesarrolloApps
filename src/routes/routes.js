const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/webDevelopment', (req, res) => {
    res.render('pages/webDevelopment');
});

router.get('/mobileDevelopment', (req,res) => {
    res.render('pages/mobileDevelopment');
});

module.exports = router;