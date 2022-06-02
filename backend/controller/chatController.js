const ChatModel = require ("../models/chatModel");

const getAllChats = async (req, res, next) => {
    let chat ;
    try {
        chat = await ChatModel.find();
    } catch (err){
        console.log(err);
    }
    if (!chat){
        return res.status(400).json({message:"no chats awailable"});
    }
    return res.status(200).json({chat});
};

const addChat = async (req,res, next)=>{
    const {
        username,
        message
    }=req.body;
    let chat;
    try{
        chat = new ChatModel({
            username,
            message
        });
        await chat.save();
    }catch(err){
        console.log(err);

    }
    if(!chat){
        return res.status(500).json({message:"unable to add"});
    }
    return res.status(201).json({chat});
    
};

exports.getAllChats = getAllChats;
exports.addChat = addChat;