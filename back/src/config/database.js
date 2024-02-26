require("dotenv").config();

// config/database.js
const { Sequelize } = require("sequelize");

// Configura los datos de conexión a la base de datos PostgreSQL
const sequelize = new Sequelize(
  "postgres", "postgres", "admin",
  {
    host: "db", // Cambiado a nombre del servicio
    dialect: "postgres", // Indica que estamos utilizando PostgreSQL
    pool: {
      max: 9,
      min: 0,
      idle: 10000
    },  
    port: '5432' // Puerto por defecto de PostgreSQL en el contenedor
  }
);

// Realiza la conexión a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
  }
})();

module.exports = sequelize;
