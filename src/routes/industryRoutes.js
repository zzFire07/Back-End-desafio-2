const { Router } = require('express');
const router = Router();


const IndustryController = require('../controllers/industryController');


router.get('/industry/getAllIndustries', IndustryController.getAll);

 
module.exports = router;