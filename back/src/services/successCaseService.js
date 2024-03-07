const { Op } = require('sequelize');
const SuccessCaseModel = require('../models/successCaseModel.js');
const  IndustryModel = require('../models/industryModel.js');
const  ClientModel = require('../models/clientModel.js');
const  ProjectTypeModel = require('../models/projectTypeModel.js');
const  ContactModel = require('../models/contactModel.js');
const  OfferingModel = require('../models/offeringModel.js');
const  CaseDetailsModel = require('../models/caseDetailsModel.js');

const  TechnologiesModel = require('../models/technologiesModel.js');
const  ImprovementsModel = require('../models/improvementsModel.js');
const  ChallengesModel = require('../models/challengesModel.js');

// Servicio para crear un caso de éxito con una industria asociada 
async function createSuccessCase(data) {
  
  try {
 
    const { title, startdate, finishdate, teamsize, ispublic, industryid, clientid, projecttypeid, contactid , offeringid, casedetail, technology, 
      challenge, improvement} = data;

    // Verifica que los campos requeridos estén presentes
    if (!title) {
      throw new Error('Falta el título del caso de éxito.');
    }
    if (!startdate) {
      throw new Error('Falta la fecha de inicio del proyecto.');
    }
    if (!finishdate) {
      throw new Error('Falta la fecha de finalización del proyecto.');
    }
    if (!teamsize) {
      throw new Error('Falta el tamaño del equipo del proyecto.');
    }
    if (!ispublic) {
      throw new Error('Falta el estado de publicación del caso de éxito.');
    }
    if (!industryid) {
      throw new Error('Falta la industria del caso de éxito.');
    }
    if (!clientid) {
      throw new Error('Falta el cliente del caso de éxito.');
    }
    if (!projecttypeid) {
      throw new Error('Falta el tipo de proyecto del caso de éxito.');
    }
    if (!contactid) {
      throw new Error('Falta el contacto del caso de éxito.');
    }
    if (!offeringid) {
      throw new Error('Falta la oferta del caso de éxito.');
    }
    if (!casedetail) {
      throw new Error('Falta el detalle del caso de éxito.');
    }
    if (!technology) {
      throw new Error('Falta la tecnología del caso de éxito.');
    }
    if (!challenge) {
      throw new Error('Falta el desafío del caso de éxito.');
    }
    if (!improvement) {
      throw new Error('Falta la mejora del caso de éxito.');
    }
    

    
    // Cargo  Success Case 
    const { image_detail, video_detail, text_detail} = casedetail;
    const caseDetail = await CaseDetailsModel.create({image_detail, video_detail, text_detail});
    const casedetailsid = caseDetail.dataValues.id;

    // Cargo Challenges
    const { image_ch, video_ch, text_ch} = challenge;
    const challenges = await ChallengesModel.create({image_ch, video_ch, text_ch});
    const challengeid = challenges.dataValues.id;

    // Cargo Technologies
    const { image_tech, video_tech, text_tech} = technology;
    const technologies = await TechnologiesModel.create({image_tech, video_tech, text_tech});
    const technologyid = technologies.dataValues.id;

    // Cargo Improvements
    const { image_imp, video_imp, text_imp} = improvement;
    const improvements = await ImprovementsModel.create({image_imp, video_imp, text_imp});
    const improvementid = improvements.dataValues.id;

 
    // Crea el caso de éxito en la base de datos utilizando el modelo
    const newSuccessCase = await SuccessCaseModel.create({
      title, startdate, finishdate, teamsize, ispublic, industryid, clientid, projecttypeid, contactid, offeringid, casedetailsid, technologyid, challengeid, improvementid
    });

    return newSuccessCase;
  } catch (error) {
    throw error;
  }
} 

async function getAll() {
  try {
    const successCases = await SuccessCaseModel.findAll({
      include: [
        {
          model: IndustryModel,
          required: true,
        },
        {
          model: ProjectTypeModel,
          required: true,
        },
        {
          model: ClientModel,
          required: true,
        },
        {
          model: ContactModel,
          required: true,
        },
        {
          model: OfferingModel,
          required: false,
        },
        {
          model: CaseDetailsModel,
          required: true,
        },
        {
          model: TechnologiesModel,
          required: true,
        },
        {
          model: ImprovementsModel,
          required: true,
        },
        {
          model: ChallengesModel,
          required: true,
        }
      ]
    });
    return successCases;
  } catch (error) {
    throw new Error('Error al obtener los casos de éxito con la información de la industria.');
  }
}

async function getByFilter(data) {
  try {
    const {clientid, industryid, projecttypeid, startdate, finishdate, contactid} = data;

    // Plantilla del Where a utilizar en el query.
    const whereFilter = {
      clientid: {
        [Op.eq]: clientid,
      },
      industryid: {
        [Op.eq]: industryid,
      },
      projecttypeid: {
        [Op.eq]: projecttypeid,
      },
      startdate: {
        [Op.gte]: startdate,
      },
      finishdate: {
        [Op.lte]: finishdate,
      },
      contactid: {
        [Op.eq]: contactid,
      },
    };

    // Chequeo de las variables del filtro. Esto es porque Sequelize las compararía buscando un Null.
    if (clientid == null) { delete whereFilter.clientid };
    if (industryid == null) { delete whereFilter.industryid };
    if (projecttypeid == null) { delete whereFilter.projecttypeid };
    if (startdate == null) { delete whereFilter.startdate };
    if (finishdate == null) { delete whereFilter.finishdate };
    if (contactid == null) { delete whereFilter.contactid };
    
    // Query a la BD con los filtros.
    const cases = await SuccessCaseModel.findAll({
      where: {...whereFilter},
      include: [
        {
          model: IndustryModel,
          required: true,
        },
        {
          model: ProjectTypeModel,
          required: true,
        },
        {
          model: ClientModel,
          required: true,
        },
        {
          model: ContactModel,
          required: true,
        },
        {
          model: OfferingModel,
          required: false,
        },
        {
          model: CaseDetailsModel,
          required: true,
        },
        {
          model: TechnologiesModel,
          required: true,
        },
        {
          model: ImprovementsModel,
          required: true,
        },
        {
          model: ChallengesModel,
          required: true,
        }
      ]
    });
    return cases;
  } catch (error) {
    throw new Error('Error al obtener los casos de éxito filtrados.');
  };
};

async function getById(successCaseId) {
  try {
    
    // Query a la BD con los filtros.
    const successCase = await SuccessCaseModel.findByPk(successCaseId, {
      include: [
        {
          model: IndustryModel,
          required: true,
        },
        {
          model: ProjectTypeModel,
          required: true,
        },
        {
          model: ClientModel,
          required: true,
        },
        {
          model: ContactModel,
          required: true,
        },
        {
          model: OfferingModel,
          required: false,
        },
        {
          model: CaseDetailsModel,
          required: true,
        },
        {
          model: TechnologiesModel,
          required: true,
        },
        {
          model: ImprovementsModel,
          required: true,
        },
        {
          model: ChallengesModel,
          required: true,
        }
      ]
    });
    return successCase;
  } catch (error) {
    throw new Error('Error al obtener el caso de éxito por Id.');
  };
};



module.exports = {
  getByFilter,
  createSuccessCase,
  getAll,
  getById,
};
