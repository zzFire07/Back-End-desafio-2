const { or } = require('sequelize');
const IndustryModel = require('../models/industryModel.js');

async function getAll() {
    try {
        const allIndustries = await IndustryModel.findAll({
            order: [['id', 'ASC']], 
        });
        return allIndustries;
    } catch (error) {
        throw new Error('Error al obtener la industria desde la base de datos');
    }
}


module.exports = {
    getAll
};
