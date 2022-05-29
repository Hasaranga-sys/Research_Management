import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentGroupService from '../../Services/StudentGroupService';

const ViewStudentGroups = () => {
  const [studentgroup, setStudentGroups] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    getAlStudentGroups();            
},[])

const getAlStudentGroups = ()=>{
  StudentGroupService.getAllStudentGroups().then((data) =>{
      setStudentGroups(data.studentgroup);
      console.log(data.studentgroup);
  })
}

const AddPanelMembers = (_id) =>{
  console.log({_id});
  navigate(`/AdminHome/ViewStudentGroups/AddPanelMembers/${_id}`);
};

  return (
    <div>
      <div className="container">
            <br></br>
            <div className="card-body">
                <div>
                    <h1 className="d-flex justify-content-center">Registerd Groups</h1>
                </div>
                <div className="row">
                    <div className="card col-md-11 offset-md-1 offset-md-0">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">groupId</th>
                                    <th scope="col">Members</th>
                                    <th scope="col">Student ID</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">Panel Members</th>
                                    <th scope="col">Topic</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentgroup.map(
                                    (student) =>
                                        <tr key={student._id}>
                                            <td>{student.groupId}</td>
                                            <td><b>{student.leaderName}</b><br></br>                                                
                                                {student.member_1Name}<br></br>
                                                {student.member_2Name}<br></br>
                                                {student.member_3Name}
                                            </td>
                                            <td><b>{student.leaderId}</b><br></br>                                                
                                                {student.member_1Id}<br></br>
                                                {student.member_2Id}<br></br>
                                                {student.member_3Id}
                                            </td>
                                            <td><b>{student.leaderEmail}</b><br></br>
                                                  {student.member_1Email}<br></br>
                                                  {student.member_2Email}<br></br>
                                                  {student.member_3Email}
                                            </td>
                                            <td><b>{student.leaderContactNo}</b><br></br>
                                                  {student.member_1ContactNo}<br></br>
                                                  {student.member_2ContactNo}<br></br>
                                                  {student.member_3ContactNo}
                                            </td>
                                            <td>{student.panelMember_1}<br></br>
                                                {student.panelMember_2}
                                            </td>
                                            <td>{student.topic}</td>
                                            <td>
                                              <button type="button"
                                                       class="btn btn-primary"
                                                       onClick={()=>AddPanelMembers(student._id)} >Add Panel Members</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>

                
                    
                </div>


            </div>


        </div>

    </div>
  )
}

export default ViewStudentGroups