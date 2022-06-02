const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const researchTopicSchema = new Schema({
  researchTopic: {
    type: String,
    required: true,
  },

  groupId: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  activeStatus: {
    type: String,
  },
});

module.exports = mongoose.model("ResearchTopic", researchTopicSchema);
