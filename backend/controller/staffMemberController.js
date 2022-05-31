const StaffMember = require("../models/StaffMember");

const getAllstaffMembers = async (req, res, next) => {
  let staffMember;
  try {
    staffMember = await StaffMember.find();
  } catch (err) {
    console.log(err);
  }
  if (!staffMember) {
    return res.status(404).json({ message: "No records available" });
  }
  return res.status(200).json({ staffMember });
};

const getStaffMemberById = async (req, res, next) => {
  const id = req.params.id;
  let staffMember;
  try {
    staffMember = await StaffMember.findById(id);
  } catch (err) {
    return res.status(400).json({ message: "No Record Available" });
  }
  return res.status(200).json({ staffMember });
};

const addStaffMember = async (req, res, next) => {
  const { username, name, role, component, email, mobileNo, password } =
    req.body;
  let staffMember;
  try {
    staffMember = new StaffMember({
      username,
      name,
      role,
      component,
      email,
      mobileNo,
      password,
    });
    await staffMember.save();
  } catch (err) {
    console.log(err);
  }
  if (!staffMember) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ staffMember });
};

const updateStaffMember = async (req, res, next) => {
  const id = req.params.id;
  const { username, name, role, component, email, mobileNo, password } =
    req.body;
  let staffMember;
  try {
    staffMember = await StaffMember.findByIdAndUpdate(id, {
      username,
      name,
      role,
      component,
      email,
      mobileNo,
      password,
    });
    staffMember = await staffMember.save();
  } catch (err) {
    console.log(err);
  }
  if (!staffMember) {
    return res.status(400).json({ message: "cannot update" });
  }
  return res.status(200).json({ staffMember });
};

const deleteStaffMember = async (req, res, next) => {
  const id = req.params.id;
  let staffMember;
  try {
    staffMember = await StaffMember.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!staffMember) {
    return res.status(404).json({ message: "cannot delete" });
  }
  return res.status(200).json({ message: `StaffMember ${id} deleted` });
};

exports.getAllstaffMembers = getAllstaffMembers;
exports.getStaffMemberById = getStaffMemberById;
exports.addStaffMember = addStaffMember;
exports.updateStaffMember = updateStaffMember;
exports.deleteStaffMember = deleteStaffMember;
