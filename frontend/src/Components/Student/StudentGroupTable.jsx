import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentGroupService from "../../Services/StudentGroupService";

const StudentGroupTable = () => {
        const [studentgroup, setStudentGroups] = useState([])
        const navigate = useNavigate();
        const [search, setSearch] = useState("");

        useEffect(()=>{
            getAlStudentGroups();            
        },[])

        const getAlStudentGroups = ()=>{
            StudentGroupService.getAllStudentGroups().then((data) =>{
                setStudentGroups(data.studentgroup);
                console.log(data.studentgroup);
            })
        }

        const clickAddGroup=()=>{
            navigate()  
        }


  return (
    <div>
        <div className="shadow-lg card bg-light w-75 mx-auto mt-5 mb-5">
            <br></br>
            <div className="card-body">
                <div>
                    <h1 className="d-flex justify-content-center">Registerd Groups</h1>
                </div>
                <input type="text" placeholder="search by Document name" className="form-control mt-3 mb-3"
                        style={{marginLeft: 320, width: "40%",}}
                        onChange={(e) => {setSearch(e.target.value); }} />

                <div className="row mb-3">
                    <div className="shadow-lg card col-md-5 mt-3 mb-4  w-75 mx-auto">
                        <table className="table table-striped mt-3">
                            <thead className='table-primary'>
                                <tr>
                                    <th scope="col">groupId</th>
                                    <th scope="col">Members</th>
                                    <th scope="col">Student ID</th>
                                    <th scope="col">Panel Members</th>
                                    <th scope="col">Topic</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentgroup?.filter((value) => {
                                                        if (search === "") {
                                                            return value;
                                                        } else if (
                                                            //value.id.toString(includes(search))
                                                            value.panelMember_1.toLowerCase().includes(search.toLowerCase()) ||
                                                            value.panelMember_2.toLowerCase().includes(search.toLowerCase()) ||
                                                            value.groupId.toLowerCase().includes(search.toLowerCase()) ||
                                                            value.leaderName.toLowerCase().includes(search.toLowerCase())  ||
                                                            value.member_2Name.toLowerCase().includes(search.toLowerCase())  ||
                                                            value.member_3Name.toLowerCase().includes(search.toLowerCase()) ||
                    
                                                            value.leaderId.toLowerCase().includes(search.toLowerCase()) ||
                                                            value.member_1Id.toLowerCase().includes(search.toLowerCase())||
                                                            value.member_2Id.toLowerCase().includes(search.toLowerCase())||
                                                            value.member_3Id.toLowerCase().includes(search.toLowerCase())
                                                        ) {
                                                            return value;
                                                        }
                                                        return 0;
                             }).map(
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
                                            <td>{student.panelMember_1}<br></br>
                                                {student.panelMember_2}
                                            </td>
                                            <td>{student.topic}</td>
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

export default StudentGroupTable