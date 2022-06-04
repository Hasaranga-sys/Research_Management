import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import submitionService from "../../Services/submitionService";

const SubmitionType = (props) => {
  const [submitions, setsubmitions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    submitionService.getAllsubmitions().then((response) => {
      setsubmitions(response.data.submitionType);
    });
  });
  const addClick = (id) =>{
    navigate(`/AdminHome/SubmissionTypeTable/-1`)
  }

  const updateClick = (id) => {
    navigate(`/AdminHome/SubmissionTypeTable/${id}`)
    // console.log(id);
  };
  const deleteClick = (id) => {
    submitionService.deleteSubmition(id).then((response) => {
      // navigate(`/`)
    });
    // console.log(id);
  };
  return (
    <div>
<div className="row text-center mt-3">
      <h2></h2>
      <div
        style={{ width: 800 }}
        className="shadow card w-75 mx-auto text-center p-3 mt-5 bg-light"
      >
        <h2>Submission Types </h2>

        <div>
          <div className="container">
            <input
              type="text"
              placeholder="Search By Group ID"
              className="form-control mx-auto mt-2"
              style={{ width: "40%" }}
              // onChange={(e) => {
              //   setSearch2(e.target.value);
              // }}
            />
          </div>
          <div className="container p-2 mt-4 mb-4">
            <div className="row">
              <div className="shadow card mx-auto w-75">
              <button className="btn btn-primary w-50 mt-3 mb-3" onClick={()=>addClick()}>Add New Submission</button>
                <table class="table table-striped mt-1">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">Evaluation</th>
                      <th scope="col">submission Type</th>
                      <th scope="col">Deadline</th>
                      <th scope="col">Update</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  {submitions.map((submitions) => (
            <tr key={submitions._id}>
              <td>{submitions.evaluationName}</td>
              <td>{submitions.submittiontype}</td>
              <td>{submitions.deadline}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => updateClick(submitions._id)}
                >
                  update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteClick(submitions._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default SubmitionType;
