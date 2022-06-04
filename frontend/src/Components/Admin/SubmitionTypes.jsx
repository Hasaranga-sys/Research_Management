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
      <h1>submition list</h1>
      <button className="m-1" onClick={()=>addClick()}   >Add</button>
      <table>
        <thead>
          <tr>
            <th>evaluationName</th>
            <th>submittiontype</th>
            <th>deadline</th>
            <th>update</th>
            <th>delete</th>
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
                  className="m-1"
                  onClick={() => updateClick(submitions._id)}
                >
                  update
                </button>
              </td>
              <td>
                <button
                  className="m-1"
                  onClick={() => deleteClick(submitions._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
export default SubmitionType;
