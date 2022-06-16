// Modules
const express = require('express');
const morgan = require('morgan');

// Config
const app = express();

//settings
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/v1', require('./routes/index'))

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}.`);
});


module.exports = app;
