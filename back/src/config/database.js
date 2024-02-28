require("dotenv").config();

// config/database.js
const { Sequelize } = require("sequelize");

// Configura los datos de conexión a la base de datos PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // Cambiado a nombre del servicio
    dialect: "postgres", // Indica que estamos utilizando PostgreSQL
    logging: false, // Desactiva los logs de Sequelize
    port: process.env.DB_PORT, // Puerto por defecto de PostgreSQL en el contenedor
    define: {
      // No agregues atributos timestamps por defecto
      timestamps: false,
      // Evita que Sequelize modifique el nombre de las columnas a camelCase
      underscored: true,
    },
    omitNull: true,
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
