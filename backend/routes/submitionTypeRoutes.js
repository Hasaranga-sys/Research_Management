const express = require("express");
const submitionTypeRouter = express.Router();
const submitionTypeController = require("../controller/submitionController");

submitionTypeRouter.post("/",submitionTypeController.addsubmitionType);
submitionTypeRouter.get("/", submitionTypeController.getAllsubmitionTypes);
submitionTypeRouter.get("/:id",submitionTypeController.getsubmittionTypeById);
submitionTypeRouter.put("/:id", submitionTypeController.updateSubmitionType);
submitionTypeRouter.delete("/:id", submitionTypeController.deletesubmitionType);

module.exports = submitionTypeRouter;