const express = require ("express");
const router = express.Router();


const researchTopicController = require("../controller/researchTopicController");

router.post("/",researchTopicController.addResearchTopic);
router.get("/", researchTopicController.getAllResearchTopics);
router.get("/:id",researchTopicController.getTopicById);
router.put("/:id",researchTopicController.updateResearchTopic);
router.delete("/:id",researchTopicController.deleteResearchTopic);

module.exports = router;