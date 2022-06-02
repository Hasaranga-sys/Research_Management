import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StaffMemberService from "../../Services/StaffMemberService";
import { useParams } from "react-router";
import ResearchTopicService from "../../Services/ResearchTopicService";

function ReqSupervisor() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [topic, setTopic] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [superStataus, setSuperStatus] = useState("pending");

  const [search, setSearch] = useState("supervisor");
  const [search2, setSearch2] = useState("");
  const { grpid } = useParams();

  useEffect(() => {
    StaffMemberService.getAllStaffMembers().then((response) => {
      setList(response.data.staffMember);
      console.log(response.data.staffMember);

      ResearchTopicService.getResearchTopicById(grpid).then((res) => {
        setTopic(res.data.researchtopics.researchTopic);
        console.log(res.data.researchtopics.researchTopic);
      });
    });

    // filterSuper();
  }, []);

  //   const filterSuper = () => {
  //     if ((list.role = "supervisor")) {
  //       setSupervisor(list);
  //       console.log(supervisor);
  //     }
  //   };

  const reqClicked = (name) => {
    setSupervisor(...supervisor, name);
    setSuperStatus("pending");

    console.log("staffid", name);
    console.log("grpid", grpid);
    console.log("topic", topic);

    setSupervisor(...supervisor, name);
    setSuperStatus("pending");

    const submitData = { supervisor, superStataus };
    console.log(submitData);
    ResearchTopicService.updateResearchTopic(grpid, submitData).then((res) => {
      console.log(res.data);
    });
    // navigate(`/admin-rooms/${id}`);
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="card-body">
        <div>
          <h1>supervisor</h1>
        </div>
        <div className="container">
          <input
            type="text"
            placeholder="search by "
            className="form-control"
            style={{
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 360,
              width: "40%",
            }}
            onChange={(e) => {
              setSearch2(e.target.value);
            }}
          />
        </div>
        <br />
        <br />

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">field</th>
            </tr>
          </thead>
          <tbody>
            {list
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  //value.id.toString(includes(search))
                  value.role.toLowerCase().includes(search.toLowerCase()) &&
                  value.component.toLowerCase().includes(search2.toLowerCase())
                ) {
                  return value;
                }
                return 0;
              })
              .map((r) => (
                <tr key={r._id}>
                  {/* <td>{r.id}</td> */}
                  <td>{r.name}</td>
                  <td>{r.component}</td>
                  {/* <td>{r.description}</td> */}
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        reqClicked(r.name);
                      }}
                      style={{ marginRight: 10 }}
                    >
                      req
                    </button>
                    {/* <button
                      className="btn btn-warning"
                      onClick={() => {
                        deleteClicked(r.id);
                      }}
                    >
                      delete
                    </button> */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <br />
        <br />

        {/* <button
          className="btn btn-primary"
          onClick={clickAddRoom}
          style={{ marginRight: 10 }}
        >
          Add Room
        </button>
        <button className="btn btn-primary" onClick={clickViewBooking}>
          View Booking Details
        </button> */}
      </div>
    </div>
  );
}

export default ReqSupervisor;
