const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');

// SETTINGS
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(morgan('dev'));

// ROUTES
app.use('/', require('./routes/routes.js'));

// PORT LISTEN
app.listen(app.get('port'), () => {
    console.log('Server listenig on port',app.get('port'));
});