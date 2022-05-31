const Student = require("../models/Student");

const getAllStudents = async (req, res, next) => {
  let students;
  try {
    students = await Student.find();
  } catch (err) {
    console.log(err);
  }
  if (!students) {
    return res.status(404).json({ message: "No records available" });
  }
  return res.status(200).json({ students });
};

const getStudentById = async (req, res, next) => {
  const id = req.params.id;
  let student;
  try {
    student = await Student.findById(id);
  } catch (err) {
    return res.status(400).json({ message: "no record available" });
  }
  return res.status(200).json({ student });
};

const addStudent = async (req, res, next) => {
  const { username, name, email, mobileNo, password } = req.body;
  let student;
  try {
    student = new Student({
      username,
      name,
      email,
      mobileNo,
      password,
    });
    await student.save();
  } catch (err) {
    console.log(err);
  }
  if (!student) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ student });
};

const updateStudent = async (req, res, next) => {
  const id = req.params.id;
  const { username, name, email, mobileNo, password } = req.body;
  let student;
  try {
    student = await Student.findByIdAndUpdate(id, {
      username,
      name,
      email,
      mobileNo,
      password,
    });
    student = await student.save();
  } catch (err) {
    console.log(err);
  }
  if (!student) {
    return res.status(400).json({ message: "cannot update" });
  }
  return res.status(200).json({ student });
};

const deleteStudent = async (req, res, next) => {
  const id = req.params.id;
  let student;
  try {
    student = await Student.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!student) {
    return res.status(404).json({ message: "cannot delete" });
  }
  return res.status(200).json({ message: `student ${id} deleted` });
};

exports.getAllStudents = getAllStudents;
exports.getStudentById = getStudentById;
exports.addStudent = addStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
