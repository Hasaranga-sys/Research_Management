const express = require("express");
const studentRouter = express.Router();
const studentController = require("../controller/StudentController");
// const Student = require("../models/Student");

//all students
// studentRouter.get("/", async (req, res, next) => {
//   let students;
//   try {
//     students = await Student.find();
//   } catch (error) {
//     console.log(error);
//   }

//   if (!students) {
//     return res.status(404).json({ message: "no users" });
//   }
//   return res.status(200).json({ students });
// });

studentRouter.post("/", studentController.addStudent);
studentRouter.get("/", studentController.getAllStudents);
studentRouter.get("/:id", studentController.getStudentById);
studentRouter.put("/:id", studentController.updateStudent);
studentRouter.delete("/:id", studentController.deleteStudent);

module.exports = studentRouter;
