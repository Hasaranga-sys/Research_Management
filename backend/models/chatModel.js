const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatmodel = new Schema({
    username: {
        type: String,
        required: true
      },
    message: {
        type: String,
        required: true
      },
});

module.exports = mongoose.model("ChatModel",chatmodel);