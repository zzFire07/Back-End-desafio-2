const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    restapi: "3.0.0",
    info: {
      title: "Desafío UCU",
      version: "1.0.0",
      description: "REST API Desafío UCU",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
  },
  // apis: ['**/*.js'],
  apis: ["src/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
};
