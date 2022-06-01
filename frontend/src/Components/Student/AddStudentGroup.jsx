import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import StudentGroupService from "../../Services/StudentGroupService";

const AddStudentGroup = () => {

  const [studentgroup, setStudentGroup] = useState({groupId : "",
   leaderName :"",leaderId:"", leaderEmail:"", leaderContactNo:"",
      member_1Name : "",
      member_1Id : "",
      member_1Email : "",
      member_1ContactNo : "",
        member_2Name : "",
        member_2Id : "",
        member_2Email : "",
        member_2ContactNo : "",
          member_3Name : "",
          member_3Id : "",
          member_3Email : "",
          member_3ContactNo :"",
            panelMember_1 :"Not Yet Allocated",
            panelMember_2 :"Not Yet Allocated",
              topic :"Pending" });

   const navigate = useNavigate();

   const RegisterGroup = (e) =>{
     setStudentGroup({...studentgroup,[e.target.name] : e.target.value});
     console.log(studentgroup);
   }

   const onSubmit = (e) =>{
     e.preventDefault();
     StudentGroupService.AddStudentGroup(studentgroup).then(data=>{
       console.log(data);
       navigate("/StudentHome/StudentGroupHome")
     })
   }

  


  return (
    <div>
      <div className="container">
      
        <form onSubmit={onSubmit}>
          <h2 className="text-center mt-4">Add Group</h2>
          <label className="sr-only">GroupId</label>
                  <input type="text"
                  name="groupId"
                  value={studentgroup.groupId}
                  onChange={RegisterGroup}
                  className='form-control'
                  placeholder="Enter group" />

                  <br></br>

                  <label className="sr-only">leaderName</label>
                  <input type="text"
                  name="leaderName"
                  value={studentgroup.leaderName}
                  onChange={RegisterGroup}
                  className='form-control'
                  placeholder="Enter group" />

                  <br></br>

                  <label className="sr-only">leaderId</label>
                  <input type="text"
                  name="leaderId"
                  value={studentgroup.leaderId}
                  onChange={RegisterGroup}
                  className='form-control'
                  placeholder="Enter group" />

                  <br></br>

                  <label className="sr-only">leaderEmail</label>
                  <input type="text"
                  name="leaderEmail"
                  value={studentgroup.leaderEmail}
                  onChange={RegisterGroup}
                  className='form-control'
                  placeholder="Enter group" />

                  <br></br>

                  <label className="sr-only">leaderContactNo</label>
                  <input type="text"
                  name="leaderContactNo"
                  value={studentgroup.leaderContactNo}
                  onChange={RegisterGroup}
                  className='form-control'
                  placeholder="Enter group" />

                  <br></br>

                      {/* Member_1 */}

                                  <label className="sr-only">member_1Name</label>
                                  <input type="text"
                                  name="member_1Name"
                                  value={studentgroup.member_1Name}
                                  onChange={RegisterGroup}
                                  className='form-control'
                                  placeholder="Enter group" />

                                  <br></br>

                                  <label className="sr-only">member_1Id</label>
                                  <input type="text"
                                  name="member_1Id"
                                  value={studentgroup.member_1Id}
                                  onChange={RegisterGroup}
                                  className='form-control'
                                  placeholder="Enter group" />

                                  <br></br>

                                  <label className="sr-only">member_1Email</label>
                                  <input type="text"
                                  name="member_1Email"
                                  value={studentgroup.member_1Email}
                                  onChange={RegisterGroup}
                                  className='form-control'
                                  placeholder="Enter group" />

                                  <br></br>

                                  <label className="sr-only">member_1ContactNo</label>
                                  <input type="text"
                                  name="member_1ContactNo"
                                  value={studentgroup.member_1ContactNo}
                                  onChange={RegisterGroup}
                                  className='form-control'
                                  placeholder="Enter group" />

                                  <br></br>

                                      {/* member_2 */}

                                            <label className="sr-only">member_2Name</label>
                                            <input type="text"
                                            name="member_2Name"
                                            value={studentgroup.member_2Name}
                                            onChange={RegisterGroup}
                                            className='form-control'
                                            placeholder="Enter group" />

                                            <br></br>

                                            <label className="sr-only">member_2Id</label>
                                            <input type="text"
                                            name="member_2Id"
                                            value={studentgroup.member_2Id}
                                            onChange={RegisterGroup}
                                            className='form-control'
                                            placeholder="Enter group" />

                                            <br></br>

                                            <label className="sr-only">member_2Email</label>
                                            <input type="text"
                                            name="member_2Email"
                                            value={studentgroup.member_2Email}
                                            onChange={RegisterGroup}
                                            className='form-control'
                                            placeholder="Enter group" />

                                            <br></br>

                                            <label className="sr-only">member_2ContactNo</label>
                                            <input type="text"
                                            name="member_2ContactNo"
                                            value={studentgroup.member_2ContactNo}
                                            onChange={RegisterGroup}
                                            className='form-control'
                                            placeholder="Enter group" />

                                            <br></br>

                                              {/* member_3 */}

                                                  <label className="sr-only">member_3Name</label>
                                                  <input type="text"
                                                  name="member_3Name"
                                                  value={studentgroup.member_3Name}
                                                  onChange={RegisterGroup}
                                                  className='form-control'
                                                  placeholder="Enter group" />

                                                  <br></br>

                                                  <label className="sr-only">member_3Id</label>
                                                  <input type="text"
                                                  name="member_3Id"
                                                  value={studentgroup.member_3Id}
                                                  onChange={RegisterGroup}
                                                  className='form-control'
                                                  placeholder="Enter group" />

                                                  <br></br>

                                                  <label className="sr-only">member_3Email</label>
                                                  <input type="text"
                                                  name="member_3Email"
                                                  value={studentgroup.member_3Email}
                                                  onChange={RegisterGroup}
                                                  className='form-control'
                                                  placeholder="Enter group" />

                                                  <br></br>

                                                  <label className="sr-only">member_3ContactNo</label>
                                                  <input type="text"
                                                  name="member_3ContactNo"
                                                  value={studentgroup.member_3ContactNo}
                                                  onChange={RegisterGroup}
                                                  className='form-control'
                                                  placeholder="Enter group" />

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

                                                          <br></br>  
{/* 
                                                                <label className="sr-only">topic</label>
                                                                <input type="text"
                                                                name="topic"
                                                                value={studentgroup.topic}
                                                                onChange={RegisterGroup}
                                                                className='form-control'
                                                                placeholder="Enter group" /> */}

                                                                <br></br>

                                    <button className=" btn btn-lg btn-primary btn-block" type="sybmit">Register</button>
        </form>

      </div>

    </div>
  )
}

export default AddStudentGroup