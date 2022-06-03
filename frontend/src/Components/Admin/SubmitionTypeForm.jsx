import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
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

    // navigate(`/`)
  };
  useEffect(() => {
    if (_id != "-1") {
      console.log(_id);
      submitionService.getsubmition(_id).then((response) => {
        setsubmition(response.data);
        // console.log("submitions1.evaluationName")
        console.log(submition);
      });

      //   console.log(submitions1.evaluationName);
    }
  }, []);
  return (
    <div>
      hello
      {/* console.log(submitions); */}
      <form
        onSubmit={(e) => {
          SubmitsubmitionForm(e);
        }}
      >
        <label>evaluationName</label>
        <br />
        <input
          name="evaluationName"
          type="text"
          placeholder={submition.evaluationName}
          onChange={(e) => {
            setevaluationName(e.target.value);
          }}
          required
        ></input>
        <br />
        <label>submittiontype</label>
        <br />
        <input
          name="submittiontype"
          type="text"
          placeholder={submition.submittiontype}
          onChange={(e) => {
            setsubmittiontype(e.target.value);
          }}
          required
        ></input>
        <br />
        <br />
        <label>deadline</label>
        <br />
        <input
          name="price"
          type="date"
          placeholder={submition.deadline}
          onChange={(e) => {
            setdeadline(e.target.value);
          }}
          required
        ></input>
        <br />
        <input className="submitButton" type="submit" value="submit" />
      </form>
    </div>
  );
}
export default SubmitionTypesForm;
