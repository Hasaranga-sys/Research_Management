const StudentGroup = require("../models/StudentGroup");

//create Group
const createGroup = async (req, res, next) => {
  const {
    groupId,
    leaderName,
    leaderId,
    leaderEmail,
    leaderContactNo,
    member_1Name,
    member_1Id,
    member_1Email,
    member_1ContactNo,
    member_2Name,
    member_2Id,
    member_2Email,
    member_2ContactNo,
    member_3Name,
    member_3Id,
    member_3Email,
    member_3ContactNo,
    panelMember_1,
    panelMember_2,
    topic,
  } = req.body;

  let studentgroup;

  try {
    studentgroup = new StudentGroup({
      groupId,
      leaderName,
      leaderId,
      leaderEmail,
      leaderContactNo,
      member_1Name,
      member_1Id,
      member_1Email,
      member_1ContactNo,
      member_2Name,
      member_2Id,
      member_2Email,
      member_2ContactNo,
      member_3Name,
      member_3Id,
      member_3Email,
      member_3ContactNo,
      panelMember_1,
      panelMember_2,
      topic,
    });
    await studentgroup.save();
  } catch (err) {
    console.log(err);
  }
  if (!studentgroup) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ studentgroup });
};

//get all users
const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }

  if (!users) {
    return res.status(404).json({ message: "no users" });
  }
  return res.status(200).json({ users });
};

//get all student groups
const getAllStudentGroups = async (req, res, next) => {
  let studentgroup;
  try {
    studentgroup = await StudentGroup.find();
  } catch (err) {
    console.log(err);
  }
  if (!studentgroup) {
    return res.status(404).json({ message: "No records available" });
  }
  return res.status(200).json({ studentgroup });
};
//get StudentGroupById
const getStudentGroupById = async (req, res, next) => {
  const id = req.params.id;
  let studentgroup;

  try {
    studentgroup = await StudentGroup.findById(id);
  } catch (err) {
    return res.status(400).json({ message: "no record available" });
  }
  return res.status(200).json({ studentgroup });
};

//update student group
const UpdateStudentGroup = async (req, res, next) => {
  const id = req.params.id;
  const {
    groupId,
    leaderName,
    leaderId,
    leaderEmail,
    leaderContactNo,
    member_1Name,
    member_1Id,
    member_1Email,
    member_1ContactNo,
    member_2Name,
    member_2Id,
    member_2Email,
    member_2ContactNo,
    member_3Name,
    member_3Id,
    member_3Email,
    member_3ContactNo,
    panelMember_1,
    panelMember_2,
    topic,
  } = req.body;

  let studentgroup;

  try {
    studentgroup = await StudentGroup.findByIdAndUpdate(id, {
      groupId,
      leaderName,
      leaderId,
      leaderEmail,
      leaderContactNo,
      member_1Name,
      member_1Id,
      member_1Email,
      member_1ContactNo,
      member_2Name,
      member_2Id,
      member_2Email,
      member_2ContactNo,
      member_3Name,
      member_3Id,
      member_3Email,
      member_3ContactNo,
      panelMember_1,
      panelMember_2,
      topic,
    });
    studentgroup = await studentgroup.save();
  } catch (err) {
    console.log(err);
  }
  if (!studentgroup) {
    return res.status(400).json({ message: "cannot update" });
  }
  return res.status(200).json({ studentgroup });
};

//delete student group
const DeleteStudentGroup = async (req, res, next) => {
  const id = req.params.id;
  let studentgroup;

  try {
    studentgroup = await StudentGroup.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!researchtopics) {
    return res.status(404).json({ message: "cannot delete" });
  }
  return res.status(200).json({ message: `group ${id} deleted` });
};

exports.DeleteStudentGroup = DeleteStudentGroup;
exports.UpdateStudentGroup = UpdateStudentGroup;
exports.getAllStudentGroups = getAllStudentGroups;
exports.createGroup = createGroup;
exports.getStudentGroupById = getStudentGroupById;
exports.getAllUsers = getAllUsers;
