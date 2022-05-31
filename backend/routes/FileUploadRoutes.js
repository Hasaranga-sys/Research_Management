const router = require("express").Router();
// const UploadFile = require("../models/UploadFile");
const UploadFile = require('../models/UploadFile');

//add uploaad
router.post('/up',async(req,res)=>{
    try {
        const UploadFiles = await UploadFile(req.body).save();
        res.status(201).send({data: UploadFiles, message: "created Successfully"})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})

//get All Documents

router.get("/readPdf", async(req,res)=>{
    try {
        const UploadFiles = await UploadFile.find();
        res.status(200).send({data: UploadFiles})
    } catch (error) {
        res.status(500).send({message: "Internal server error"})        
    }
})

module.exports = router;