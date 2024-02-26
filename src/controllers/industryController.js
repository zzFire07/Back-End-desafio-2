const IndustryService = require("../services/industryService.js");

async function findAll(req, res) {
  try {
    const allIndustries = await IndustryService.findAll();
    if (allIndustries) {
      return res.status(200).json(allIndustries);
    } else {
      return res
        .status(204)
        .json({ message: "No se encontraron industrias en el sistema." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Error al obtener las industrias",
        error: error.message,
      });
  }
}

module.exports = {
  findAll,
};
