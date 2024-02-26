const express = require('express');
const app = express();
const morgan = require('morgan');


//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


<<<<<<< HEAD
///Routes
app.use(require('./routes/clientRoutes.js')); 
=======
//Routes
app.use(require('./routes/offeringRoutes.js'));
>>>>>>> 79068b2237455863f6d8afbd06d6ab813f1428f5

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});