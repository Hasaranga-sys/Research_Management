const SubmitionType = require("../models/submitionTypesModel");

const getAllsubmitionTypes = async (req, res, next) => {
    let submitionType;
    try {
      submitionType = await SubmitionType.find();
    } catch (err) {
      console.log(err);
    }
    if (!submitionType) {
      return res.status(404).json({ message: "No records available" });
    }
    return res.status(200).json({ submitionType });
  };

const getsubmittionTypeById = async (req, res, next) => {
    const id = req.params.id;
    let submittionType;
    try {
      submittionType = await SubmitionType.findById(id);
    } catch (err) {
      return res.status(400).json({ message: "No Record Available" });
    }
    return res.status(200).json( submittionType );
  };

  const addsubmitionType = async (req, res, next) => {
    const {
        evaluationName,
        submittiontype,
        deadline
    } = req.body;
    let submitionType;
    try {
      submitionType = new SubmitionType({
        evaluationName,
        submittiontype,
        deadline,
      });
      await submitionType.save();
    } catch (err) {
      console.log(err);
    }
    if (!submitionType) {
      return res.status(500).json({ message: "unable to add" });
    }
    return res.status(201).json({ submitionType });
  };




const updateSubmitionType = async (req, res)=>{
    const id = req.params.id;
    const {
        evaluationName,
        submittiontype,
        deadline
    } = req.body;
    let submitionType;
    try {
        submitionType = await SubmitionType.findByIdAndUpdate(id,{
            evaluationName,
            submittiontype,
            deadline
        });
        submitionType = await submitionType.save();
    }catch(err){
        console.log(err);
    }if(!submitionType)
    {
        return res.status(400).json({ message: "No Record Available" });
    }
    return res.status(200).json({ submitionType });
  };

const deletesubmitionType = async (req, res, next) => {
    const id = req.params.id;
    let submitionType;
    try {
      submitionType = await SubmitionType.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!submitionType) {
      return res.status(404).json({ message: "cannot delete" });
    }
    return res.status(200).json({ message: `submitionType ${id} deleted` });
  };

  exports.getAllsubmitionTypes = getAllsubmitionTypes;
  exports.getsubmittionTypeById = getsubmittionTypeById;
  exports.addsubmitionType = addsubmitionType;
  exports.updateSubmitionType = updateSubmitionType;
  exports.deletesubmitionType = deletesubmitionType;