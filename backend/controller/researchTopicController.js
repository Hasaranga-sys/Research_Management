const ResearchTopic = require("../models/researchTopic")
const addResearchTopic = async(req,res,next)=>{
    const {researchTopic} =req.body;
    let researchtopics;
    try {
        researchtopics = new ResearchTopic({
            researchTopic
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
exports.addResearchTopic= addResearchTopic;