import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import submitionService from "../../Services/submitionService";
import submitionService from "../../Services/submitionService";

import { useNavigate } from "react-router-dom";

function SubmitionTypesForm(props) {
  const { _id } = useParams();
  const [submitions1, setsubmitions] = useState([]);
  const [evaluationName, setevaluationName] = useState("");
  const [submittiontype, setsubmittiontype] = useState("");
  const [deadline, setdeadline] = useState();
  const [submition, setsubmition] = useState([]);
  const navigate = useNavigate();

  const SubmitsubmitionForm = (e) => {
    if (_id == "-1") {
      e.preventDefault();
      const submition1 = {
        evaluationName,
        submittiontype,
        deadline,
      };
      console.log(submition1);
      submitionService.addsubmition(submition1);
    } else {
      e.preventDefault();
      const submition1 = {
        evaluationName,
        submittiontype,
        deadline,
      };
      console.log(submition1);
      submitionService.updateSubmition(_id, submition1);
    }

    navigate(`/AdminHome/SubmissionTypeTable`)
  };
  useEffect(() => {
    if (_id != "-1") {
      console.log(_id);
      submitionService.getsubmition(_id).then((response) => {
        setsubmition(response.data);
        console.log(submition);
      });
    }
  }, []);

  const title = ()=>{
    if(_id =="-1"){
      return <h2 className="text-center"> Add Submission Type</h2>
    }
    return <h2 className="text-center"> Update Submission Type</h2>
  }
  return (
    <div >

<form
        onSubmit={(e) => {
          SubmitsubmitionForm(e);
        }}
      >
        <div className="card w-50 mx-auto shadow-lg bg-light mb-3 mt-5">
          <h2>{title()}</h2>
        <div className="row w-75 mx-auto mt-3">
        <label className=" col-sm-3 col-form-label">Evaluation Name</label>
        <input name="groupId" className="form-control w-25" type="text"
        placeholder={submition.evaluationName}
          value={evaluationName} onChange={(e) => {setevaluationName(e.target.value);}} required/>
        </div>

        <div className="row w-75 mx-auto mt-3">
        <label className=" col-sm-3 col-form-label">Submission Type</label>
        <input name="submittiontype" className="form-control w-50" type="text"
        placeholder={submition.submittiontype}
          value={submittiontype} onChange={(e) => {setsubmittiontype(e.target.value);}} required/>
        </div>

        <div className="row w-75 mx-auto mt-3">
        <label className="col-sm-3 col-form-label">Deadline</label>
        <input name="price" className="form-control w-50" type="date"
          placeholder={submition.deadline}
          
          value={deadline} onChange={(e) => {setdeadline(e.target.value);}} required/>
        </div>
        
        <div className="row w-75 mx-auto mt-3 mb-4">
        <input className="btn btn-primary mt-4 mx-auto" type="submit"  value="submit" />
        </div>
        </div>
        
       

      </form>












    </div>
  );
}
export default SubmitionTypesForm;
