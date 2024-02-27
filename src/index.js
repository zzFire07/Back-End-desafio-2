const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


<<<<<<< HEAD
<<<<<<< HEAD
///Routes
app.use(require('./routes/clientRoutes.js')); 
=======
//Routes
app.use(require('./routes/offeringRoutes.js'));
>>>>>>> 79068b2237455863f6d8afbd06d6ab813f1428f5
=======
///Routes
app.use(require('./routes/clientRoutes.js')); 
app.use(require('./routes/offeringRoutes.js'));
app.use(require('./routes/projectTypeRoutes.js'));
app.use(require('/routes(contactRoutes.js'));
>>>>>>> b875e79f9143d8cfa54b09b59462cd71b85a2c7d

//Iniciando el servidor
app.listen(app.get('port'), () => {

    console.log(`Server listening on port ${app.get('port')}`);
});