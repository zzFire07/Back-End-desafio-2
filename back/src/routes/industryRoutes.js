const { Router } = require("express");
const router = Router();

const IndustryController = require("../controllers/industryController");

router.get("/findAllIndustries", IndustryController.findAll);
