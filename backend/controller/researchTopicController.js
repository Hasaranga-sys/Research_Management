const ResearchTopic = require("../models/researchTopic")

//add research topic
const addResearchTopic = async(req,res,next)=>{
    const {researchTopic,groupId,activeStatus} =req.body;
    let researchtopics;
    try {
        researchtopics = new ResearchTopic({
            researchTopic,
            groupId,
            activeStatus
        });
        await researchtopics.save();
    } catch (err) {
        console.log(err);        
    }
    if(!researchtopics){
        return res.status(500).json({message:"unable to add"})
    }
    return res.status(201).json({researchtopics});
}

//get all Research topics
const getAllResearchTopics =  async(req,res,next)=>{
    let researchtopics
    try {
        researchtopics = await ResearchTopic.find(); 
    } catch (err) {
        console.log(err)
    }
    if(!researchtopics){
        return res.status(404).json({message:"No records available"});
    }
    return res.status(200).json({researchtopics});
}

//getResearchttopic id
const getTopicById = async(req,res,next)=>{
    const id = req.params.id
    let researchtopics;
    try {
        researchtopics = await ResearchTopic.findById(id);
    } catch (err) {
        return res.status(400).json({message:"no record available"});
    }
    return res.status(200).json({researchtopics});
}

//update topic
const updateResearchTopic = async(req,res,nect)=>{
    const id= req.params.id;
    const{researchTopic,groupId,activeStatus} = req.body;
    let researchtopics;
    try {
        researchtopics = await ResearchTopic.findByIdAndUpdate(id,{
            researchTopic,
            groupId,
            activeStatus
        })
        researchtopics = await researchtopics.save()
    } catch (err) {
        console.log(err)
    }
    if(!researchtopics){
        return res.status(400).json({message:"cannot update"});
    }
    return res.status(200).json({researchtopics});
}

//delete research topic

const deleteResearchTopic = async(req,res,next)=>{
    const id =req.params.id;
    let researchtopics;
    try {
        researchtopics = await ResearchTopic.findByIdAndRemove(id);
    } catch (err) {
        console.log(err)
    }
    if(!researchtopics){
        return res.status(404).json({message:"cannot delete"})
    }
    return res.status(200).json({message:`topic ${id} deleted`})
}

exports.deleteResearchTopic=deleteResearchTopic;
exports.updateResearchTopic=updateResearchTopic;
exports.getTopicById=getTopicById;
exports.getAllResearchTopics=getAllResearchTopics;
exports.addResearchTopic= addResearchTopic;