const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const submitionType = new Schema({
    evaluationName: {
        type: String,
        required: true
      },
    submittiontype: {
        type: String,
        required: true
      },
    deadline: {
        type: Date,
        required: true
      },
});

module.exports = mongoose.model("SubmitionType",submitionType);