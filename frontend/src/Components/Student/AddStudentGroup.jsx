import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import StudentGroupService from "../../Services/StudentGroupService";

const AddStudentGroup = () => {
  const [studentgroup, setStudentGroup] = useState({
    groupId: "",
    leaderName: "",
    leaderId: "",
    leaderEmail: "",
    leaderContactNo: "",
    member_1Name: "",
    member_1Id: "",
    member_1Email: "",
    member_1ContactNo: "",
    member_2Name: "",
    member_2Id: "",
    member_2Email: "",
    member_2ContactNo: "",
    member_3Name: "",
    member_3Id: "",
    member_3Email: "",
    member_3ContactNo: "",
    panelMember_1: "Not Yet Allocated",
    panelMember_2: "Not Yet Allocated",
    topic: "Pending",
  });

  const navigate = useNavigate();

  const RegisterGroup = (e) => {
    setStudentGroup({ ...studentgroup, [e.target.name]: e.target.value });
    console.log(studentgroup);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    StudentGroupService.AddStudentGroup(studentgroup).then((data) => {
      console.log(data);
      Swal.fire(" successfully requested.");
      navigate("/StudentHome/StudentGroupHome");
    });
  };

  return (
    <div>
      <div className="shadow card mx-auto w-50 p-4 mt-5 mb-5 bg-light">
        <form onSubmit={onSubmit}>
          <h1 className="text-center mt-4">Create Group</h1>
          <label className="sr-only">Group Id</label>
          <input
            type="text"
            name="groupId"
            value={studentgroup.groupId}
            onChange={RegisterGroup}
            className="form-control"
            placeholder="Enter group Id"
          />

          <br></br>

          <label className="sr-only">leaderName</label>
          <input
            type="text"
            name="leaderName"
            value={studentgroup.leaderName}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
            placeholder="Enter leader Name"
          />

          <br></br>

          <label className="sr-only">leader IT Number</label>
          <input
            type="text"
            placeholder="leader IT number"
            value={studentgroup.leaderId}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">leader Email</label>
          <input
            type="text"
            placeholder="leader Email"
            value={studentgroup.leaderEmail}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">leader Contact Number</label>
          <input
            type="text"
            placeholder="leader Contact Number"
            value={studentgroup.leaderContactNo}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          {/* Member_1 */}

          <label className="sr-only">Member 1 Name</label>
          <input
            type="text"
            placeholder="Member 1 Name"
            value={studentgroup.member_1Name}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">Member 1 IT</label>
          <input
            type="text"
            placeholder="Member 1 IT Number"
            value={studentgroup.member_1Id}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">Member 1 Email</label>
          <input
            type="text"
            placeholder="Member 1 Email"
            value={studentgroup.member_1Email}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">member 1 Contact Number</label>
          <input
            type="text"
            placeholder="Member 1 Contact Number"
            value={studentgroup.member_1ContactNo}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          {/* member_2 */}

          <label className="sr-only">member 2 Name</label>
          <input
            type="text"
            placeholder="Member 2 Name"
            value={studentgroup.member_2Name}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">member 2 IT Number</label>
          <input
            type="text"
            placeholder="Member 2 IT Number"
            value={studentgroup.member_2Id}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">member 2 Email</label>
          <input
            type="text"
            placeholder="Member 2 Email"
            value={studentgroup.member_2Email}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">member 2 Contact Number</label>
          <input
            type="text"
            placeholder="Member 2 Contact Number"
            value={studentgroup.member_2ContactNo}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          {/* member_3 */}

          <label className="sr-only">Member 3 Name</label>
          <input
            type="text"
            placeholder="Member 3 Name"
            value={studentgroup.member_3Name}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">Member 3 IT Number</label>
          <input
            type="text"
            placeholder="Member 3 IT Number"
            value={studentgroup.member_3Id}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">Member 3 Email</label>
          <input
            type="text"
            placeholder="Member 3 Email"
            value={studentgroup.member_3Email}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          <label className="sr-only">Member 3 Contact Number</label>
          <input
            type="text"
            placeholder="Member 3 Contact Number"
            value={studentgroup.member_3ContactNo}
            onChange={RegisterGroup}
            className="form-control"
            required="required"
          />

          <br></br>

          {/* <label className="sr-only">panelMember_1</label>
                                                          <input type="text"
                                                          name="panelMember_1"
                                                          value={studentgroup.panelMember_1}
                                                          onChange={RegisterGroup}
                                                          className='form-control'
                                                          placeholder="Enter group" /> */}

          <br></br>

          {/* <label className="sr-only">panelMember_2</label>
                                                          <input type="text"
                                                          name="panelMember_2"
                                                          value={studentgroup.panelMember_2}
                                                          onChange={RegisterGroup}
                                                          className='form-control'
                                                          placeholder="Enter group" /> */}

          {/* 
                                                                <label className="sr-only">topic</label>
                                                                <input type="text"
                                                                name="topic"
                                                                value={studentgroup.topic}
                                                                onChange={RegisterGroup}
                                                                className='form-control'
                                                                placeholder="Enter group" /> */}

          <button className=" btn btn-lg btn-primary btn-block" type="sybmit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentGroup;
