const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const researchTopicSchema = new Schema({
    researchTopic:{
        type:String,
        required:true
        }
})

module.exports = mongoose.model("ResearchTopic",researchTopicSchema);