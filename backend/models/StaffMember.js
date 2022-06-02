const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const staffMemberSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    max: 10,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  component: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  grpid: {
    type: String,
  },
  topic: {
    type: String,
  },
});

module.exports = mongoose.model("StaffMember", staffMemberSchema);
