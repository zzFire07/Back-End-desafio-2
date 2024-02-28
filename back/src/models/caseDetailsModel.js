const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class CaseDetailsModel extends Model {}

CaseDetailsModel.init(
  {
    // Atributos del Detalle (El id está dado por Postgre)
    image: {
      type: DataTypes.STRING,
    },
    video: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'CaseDetails', // Nombre del modelo
    tableName: 'case_details', // Nombre de la tabla en la base de datos
  }
);

module.exports = CaseDetailsModel;