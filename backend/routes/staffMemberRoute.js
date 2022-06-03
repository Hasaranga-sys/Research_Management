const express = require("express");
const staffMemberRouter = express.Router();
const staffMemberController = require("../controller/staffMemberController");

staffMemberRouter.post("/", staffMemberController.addStaffMember);
staffMemberRouter.get("/", staffMemberController.getAllstaffMembers);
staffMemberRouter.get("/:id", staffMemberController.getStaffMemberById);
staffMemberRouter.put("/:id", staffMemberController.updateStaffMember);
staffMemberRouter.delete("/:id", staffMemberController.deleteStaffMember);

module.exports = staffMemberRouter;
