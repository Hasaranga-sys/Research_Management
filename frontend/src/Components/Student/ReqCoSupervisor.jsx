import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import StaffMemberService from "../../Services/StaffMemberService";
import ResearchTopicService from "../../Services/ResearchTopicService";
import Swal from "sweetalert2";

function ReqCoSupervisor() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [topic, setTopic] = useState("");
  const [coSupervisor, setCoSupervisor] = useState("");
  const [coSuperStataus, setCoSuperStatus] = useState("pending");

  const [search, setSearch] = useState("co-supervisor");
  const [search2, setSearch2] = useState("");
  const { grpid } = useParams();

  useEffect(() => {
    StaffMemberService.getAllStaffMembers().then((response) => {
      setList(response.data.staffMember);
      console.log(response.data.staffMember);
    });
  }, []);

  const reqClicked = (name) => {
    setCoSupervisor(name);
    setCoSuperStatus("pending");

    console.log("staffid", name);
    console.log("super", coSupervisor);
    console.log("grpid", grpid);

    if (coSupervisor == name) {
      const submitData = { coSupervisor, coSuperStataus };
      console.log(submitData);
      ResearchTopicService.updateResearchTopic(grpid, submitData).then(
        (res) => {
          console.log(res.data);
          Swal.fire(" successfully requested.");
          navigate("/StudentHome/TopicRegisterTable");
        }
      );
    }
  };

  return (
    <div className="shadow card w-75 mx-auto text-center p-3 mt-5 bg-light">
      <h1>Co-Supervisor List</h1>

      <div>
        <div className="container">
          <input
            type="text"
            placeholder="Search by Field"
            className="form-control mx-auto mt-2"
            style={{ width: "40%" }}
            onChange={(e) => {
              setSearch2(e.target.value);
            }}
          />
        </div>

        <div className="container p-2 mt-4 mb-4">
          <div className="row">
            <div className="shadow card mx-auto w-75">
              <table class="table table-striped">
                <thead className="table-primary">
                  <tr>
                    <th scope="col">Supervisor Name</th>
                    <th scope="col">Field</th>
                    <th scope="col">Request</th>
                  </tr>
                </thead>
                <tbody>
                  {list
                    .filter((value) => {
                      if (search === "") {
                        return value;
                      } else if (
                        value.role
                          .toLowerCase()
                          .includes(search.toLowerCase()) &&
                        value.component
                          .toLowerCase()
                          .includes(search2.toLowerCase())
                      ) {
                        return value;
                      }
                      return 0;
                    })
                    .map((r) => (
                      <tr key={r._id}>
                        <td>{r.name}</td>
                        <td>{r.component}</td>

                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              reqClicked(r.name);
                            }}
                            style={{ marginRight: 10 }}
                          >
                            Request
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
  );
}

export default ReqCoSupervisor;
