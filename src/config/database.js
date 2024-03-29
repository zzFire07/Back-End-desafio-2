// config/database.js
const { Sequelize } = require('sequelize');

// Configura los datos de conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
  host: 'localhost', // Cambia esto si tu base de datos está en un servidor remoto
  port: '5432', // Cambia esto si tu base de datos utiliza otro puerto
  dialect: 'postgres', // Indica que estamos utilizando PostgreSQL
  logging: false, // Desactiva los logs de Sequelize
  define: {
    // No agregues atributos timestamps por defecto
    timestamps: false,
    // Evita que Sequelize modifique el nombre de las columnas a camelCase
    underscored: true,  
  },
  omitNull: true

});

// Realiza la conexión a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
})();

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = sequelize;
=======
module.exports = sequelize;
>>>>>>> 79068b2237455863f6d8afbd06d6ab813f1428f5
=======
module.exports = sequelize;
>>>>>>> b875e79f9143d8cfa54b09b59462cd71b85a2c7d
