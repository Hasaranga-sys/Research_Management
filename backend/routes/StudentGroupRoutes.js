const express = require("express");
const router = express.Router();

const StudentGroupController = require("../controller/StudentGroupController");

router.post("/",StudentGroupController.createGroup);
router.get("/",StudentGroupController.getAllStudentGroups);
router.get("/:id",StudentGroupController.getStudentGroupById);
router.put("/:id",StudentGroupController.UpdateStudentGroup);
router.delete("/:id",StudentGroupController.DeleteStudentGroup);

module.exports= router;