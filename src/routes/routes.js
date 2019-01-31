const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/webDevelopment', (req, res) => {
    res.render('pages/webDevelopment');
});

router.get('/img/bg1.jpg', (req,res) => {
    res.send('<img src="../public/img/bg1.jpg"');
});

module.exports = router;