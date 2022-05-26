const express = require ("express");
const router = express.Router();


const researchTopicController = require("../controller/researchTopicController");

router.post("/",researchTopicController.addResearchTopic);

module.exports = router;