import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import emailjs from "emailjs-com";
import StudentGroupService from "../../Services/StudentGroupService";

function SendFeedBack() {
  const [grpName, setGrpName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");

  const [studentgroup, setStudentGroups] = useState([]);
  const [search, setSearch] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  console.log(grpName);

  useEffect(() => {
    console.log("compooo");

    var grp = id;
    setGrpName(grp);

    StudentGroupService.getAllStudentGroups().then((res) => {
      setStudentGroups(res.studentgroup);
      console.log(res.studentgroup);
    });

    // if (id) {
    //   RoomService.getRoomByID(id).then((Response) => {
    //     setCategory(Response.data.category);
    //     setSize(Response.data.size);
    //     setDescription(Response.data.description);
    //   });
    // }
  }, []);

  const clickSubmit = (e) => {
    e.preventDefault();

    const submitData = { grpName, email, feedback };

    console.log(submitData);

    emailjs
      .sendForm(
        "service_te9rdrw",
        "template_t7wgl5z",
        e.target,
        "user_82jopq3UFMlV5szQ1YBg1"
      )
      .then((res) => {
        console.log(res);
      });

    // RegistrationService.addUser(submitData).then((res) => {
    //   console.log(res);
    //   setResId(res.data.userId);
    //   navigate(`/profile/${res.data.userId}`);
    //   Swal.fire(" succesfully registaion");
    // });
  };

  return (
    <div className="container">
      <div>
      </div>
      <br />
      <br />
      <div className="card shadow-lg bg-light col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <center><h1 className="mx-auto">feedback</h1></center>
          
          <br />
          <br />
          <form onSubmit={clickSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 mb-5 col-form-label">Group ID</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="kamal"
                  value={grpName}
                  onChange={(e) => setGrpName(e.target.value)}
                  required="required"
                  name="grpName"
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required="required"
                  name="email"
                ></input>
              </div>
            </div>
            <br />
            <br />
            <div className="form-group">
              <label>feedback</label>
              <textarea
                className="form-control mb-4"
                id="exampleFormControlTextarea1"
                rows="3"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                // defaultValue="null"
                placeholder="enter description"
                required="required"
                name="feedback"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div
        style={{ width: 1350 , marginLeft:1}}
        className="card shadow bg-light  mt-5 mb-5 p-1 "
      >
        <br></br>
        <div style={{ width: 1300, }} className="card-body">
          <div>
            <h1 className="d-flex justify-content-center">Registerd Groups</h1>
          </div>
          <div className="container">
            <input
              type="text"
              placeholder="search.."
              className="form-control"
              style={{
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 360,
                width: "40%",
              }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <div className="shadow card mx-auto">
              <table className="table table-striped mt-3">
                <thead className="table-primary">
                  <tr>
                    <th scope="col">groupId</th>
                    <th scope="col">Members</th>
                    <th scope="col">Student ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact Number</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {studentgroup
                    .filter((value) => {
                      if (search === "") {
                        return value;
                      } else if (
                        //value.id.toString(includes(search))
                        value.panelMember_1
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        value.panelMember_2
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        value.groupId
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        value.leaderName
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        value.member_2Name
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        value.member_3Name
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        value.leaderId
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        value.member_1Id
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        value.member_2Id
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        value.member_3Id
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return value;
                      }
                      return 0;
                    })
                    .map((student) => (
                      <tr key={student._id}>
                        <td>{student.groupId}</td>
                        <td>
                          <b>{student.leaderName}</b>
                          <br></br>
                          {student.member_1Name}
                          <br></br>
                          {student.member_2Name}
                          <br></br>
                          {student.member_3Name}
                        </td>
                        <td>
                          <b>{student.leaderId}</b>
                          <br></br>
                          {student.member_1Id}
                          <br></br>
                          {student.member_2Id}
                          <br></br>
                          {student.member_3Id}
                        </td>
                        <td>
                          <b>{student.leaderEmail}</b>
                          <br></br>
                          {student.member_1Email}
                          <br></br>
                          {student.member_2Email}
                          <br></br>
                          {student.member_3Email}
                        </td>
                        <td>
                          <b>{student.leaderContactNo}</b>
                          <br></br>
                          {student.member_1ContactNo}
                          <br></br>
                          {student.member_2ContactNo}
                          <br></br>
                          {student.member_3ContactNo}
                        </td>
                        {/* <td>{student.panelMember_1}<br></br>
                                                {student.panelMember_2}
                                            </td> */}
                        {/* <td>{student.topic}</td> */}
                        {/* <td>
                                              <button type="button"
                                                       class="btn btn-primary"
                                                       onClick={()=>AddPanelMembers(student._id)} >Add Panel Members</button>
                                            </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendFeedBack;
