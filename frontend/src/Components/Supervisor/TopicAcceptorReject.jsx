import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";
import Swal from "sweetalert2";

const TopicAcceptorReject = () => {
  // const [researchTopic, setResearchTopic] = useState([]);
  const [groupId, setGroupId] = useState("");
  const [activeStatus, setActiveStatus] = useState("");
  const [researchTopic, setResearchTopic] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [superStataus, setsuperStataus] = useState("");
  const [coSupervisor, setCoSupervisor] = useState("");
  const [coSuperStataus, setCosuperStataus] = useState("");

  const history = useNavigate();
  const { _id } = useParams();

  useEffect(() => {
    if (_id) {
      ResearchTopicService.getResearchTopicById(_id).then((res) => {
        console.log(res.data);
        console.log(res.data.researchtopics.groupId);
        setGroupId(res.data.researchtopics.groupId);
        setActiveStatus(res.data.researchtopics.activeStatus);
        setResearchTopic(res.data.researchtopics.researchTopic);
        setSupervisor(res.data.researchtopics.supervisor);
        setsuperStataus(res.data.researchtopics.superStataus);
        setCoSupervisor(res.data.researchtopics.coSupervisor);
        setCosuperStataus(res.data.researchtopics.coSuperStataus);

        // setResearchTopic(Response.data.researchTopic);
        // setActiveStatus(Response.data.activeStatus);
      });
    }
  }, []);

  const saveResearchTopic = (e) => {
    e.preventDefault();
    const ResearchTopic = {
      //   researchTopic,
      groupId,
      researchTopic,
      activeStatus,
      supervisor,
      superStataus,
      coSupervisor,
      coSuperStataus,
    };

    console.log(ResearchTopic);

    if (_id) {
      ResearchTopicService.updateResearchTopic(_id, ResearchTopic)
        .then((res) => {
          {
            console.log(res);
            Swal.fire(" successfull.");
            history("/SupervisorHome/TopicView");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
    }
  };

  return (
    <div>
      <div className="card shadow-lg w-75 mx-auto mt-5 mb-5 p-3 text-center">
        <h2>Group management</h2>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Topic{" "}
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Supervisor
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Co-Supervisor
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            topic Accept
            <form
              onSubmit={(e) => {
                saveResearchTopic(e);
              }}
            >
              <div className="card shadow-lg bg-light mb-3 mt-3">
                <div className="row w-75 mx-auto mt-3">
                  <label className=" col-sm-3 col-form-label">Group ID</label>
                  <input
                    name="groupId"
                    className="form-control w-25"
                    type="text"
                    value={groupId}
                    onChange={(e) => {
                      setGroupId(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className=" col-sm-3 col-form-label">Topic</label>
                  <input
                    name="groupId"
                    className="form-control w-50"
                    type="text"
                    value={researchTopic}
                    readOnly
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className=" col-sm-3 col-form-label">
                    Topic Status
                  </label>
                  <select
                    className="form-select w-50"
                    aria-label="Default select example"
                    onChange={(e) => setActiveStatus(e.target.value)}
                    value={activeStatus}
                    required
                  >
                    <option selected>Accept or Reject</option>
                    <option value="Under Consideration">
                      Under Consideration
                    </option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div className="row w-75 mx-auto mt-3 mb-4">
                  <input
                    className="btn btn-primary mt-4 mx-auto"
                    type="submit"
                    value="submit"
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            Accept the request as Supervisor
            <form
              onSubmit={(e) => {
                saveResearchTopic(e);
              }}
            >
              <div className="card shadow-lg bg-light mb-3 mt-3">
                <div className="row w-75 mx-auto mt-3">
                  <label className=" col-sm-3 col-form-label">Group ID</label>
                  <input
                    name="groupId"
                    className="form-control w-25"
                    type="text"
                    value={groupId}
                    onChange={(e) => {
                      setGroupId(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className=" col-sm-3 col-form-label">Topic</label>
                  <input
                    name="groupId"
                    className="form-control w-50"
                    type="text"
                    value={researchTopic}
                    readOnly
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className=" col-sm-3 col-form-label">
                    Topic Status
                  </label>
                  <select
                    className="form-select w-50"
                    aria-label="Default select example"
                    onChange={(e) => setActiveStatus(e.target.value)}
                    value={activeStatus}
                    required
                  >
                    <option selected>Accept or Reject</option>
                    <option value="Under Consideration">
                      Under Consideration
                    </option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className="col-sm-3 col-form-label">
                    Supervisor Name
                  </label>
                  <input
                    name="field"
                    className="form-control w-50"
                    type="text"
                    value={supervisor}
                    readOnly
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className="col-sm-3 col-form-label">
                    Supervisor Status
                  </label>
                  <select
                    className="form-select w-50"
                    aria-label="Default select example"
                    onChange={(e) => setsuperStataus(e.target.value)}
                    value={superStataus}
                    required
                  >
                    <option selected>Accept or Reject</option>
                    <option value="Under Consideration">
                      Under Consideration
                    </option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div className="row w-75 mx-auto mt-3 mb-4">
                  <input
                    className="btn btn-primary mt-4 mx-auto"
                    type="submit"
                    value="submit"
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            Accept or reject
            <form
              onSubmit={(e) => {
                saveResearchTopic(e);
              }}
            >
              <div className="card shadow-lg bg-light mb-3 mt-3">
                <div className="row w-75 mx-auto mt-3">
                  <label className=" col-sm-3 col-form-label">Group ID</label>
                  <input
                    name="groupId"
                    className="form-control w-25"
                    type="text"
                    value={groupId}
                    onChange={(e) => {
                      setGroupId(e.target.value);
                    }}
                    readOnly
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className=" col-sm-3 col-form-label">Topic</label>
                  <input
                    name="groupId"
                    className="form-control w-50"
                    type="text"
                    value={researchTopic}
                    readOnly
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className=" col-sm-3 col-form-label">
                    Topic Status
                  </label>
                  <input
                    name="groupId"
                    className="form-control w-50"
                    type="text"
                    value={activeStatus}
                    readOnly
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className="col-sm-3 col-form-label">
                    Supervisor Name
                  </label>
                  <input
                    name="field"
                    className="form-control w-50"
                    type="text"
                    value={supervisor}
                    readOnly
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className="col-sm-3 col-form-label">
                    Supervisor Status
                  </label>

                  <input
                    name="field"
                    className="form-control w-50"
                    type="text"
                    value={superStataus}
                    readOnly
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className="col-sm-3 col-form-label">
                    Co-Supervisor Name
                  </label>
                  <input
                    name="coSupervisor"
                    className="form-control w-50"
                    type="text"
                    value={coSupervisor}
                    readOnly
                  />
                </div>

                <div className="row w-75 mx-auto mt-3">
                  <label className="col-sm-3 col-form-label">
                    Co-Supervisor Status
                  </label>
                  <select
                    className="form-select w-50"
                    aria-label="Default select example"
                    onChange={(e) => setCosuperStataus(e.target.value)}
                    value={coSuperStataus}
                    required
                  >
                    <option selected>Accept or Reject</option>
                    <option value="Under Consideration">
                      Under Consideration
                    </option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div className="row w-75 mx-auto mt-3 mb-4">
                  <input
                    className="btn btn-primary mt-4 mx-auto"
                    type="submit"
                    value="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 
        <div className="card shadow-lg w-50 p-3 mx-auto mt-5">

            <form onSubmit={(e) => {saveResearchTopic(e); }}>

              <div style={{marginTop: 20,}}  className="mb-3 row">

                      <label className="col-sm-2 col-form-label">Group ID</label>
                        <div class="col-sm-9">
                          <input className="form-control w-50"  name="groupId" value={groupId} type="text" readOnly />
                        </div>
               </div>
    
                <div style={{marginTop: 20,}} className="border mb-3 row">

                    <label className="col-sm-3 col-form-label">Topic Status</label>
                      <div class="col-sm-9">
                            <select className="form-select w-50" 
                                    style={{marginLeft:-65}}
                                    aria-label="Default select example"  
                                    onChange={(e) => setActiveStatus(e.target.value)}
                                    value={activeStatus}  required>

                            <option selected>Accept or Reject</option>
                                <option value="Under Consideration">Under Consideration</option>
                                <option value="Accepted">Accepted</option>
                                <option value="Rejected">Rejected</option>   
                            </select>
                      </div>

                    <div style={{marginTop: 20,}}  className="mb-2 row">
                      <label className="col-sm-3 col-form-label">Supervisor Name</label>
                        <div class="col-sm-9">
                          <input className="form-control w-50"  name="supervisor" value={supervisor} type="text" readOnly />
                        </div>
                      </div>

                      
                      <label className=" col-sm-3 col-form-label">Supervisor Status</label>
                      <div className="col-sm-9">
                            <select className="form-select w-50" 
                                    style={{marginLeft:-65}}
                                    aria-label="Default select example"  
                                    onChange={(e) => setsuperStataus(e.target.value)}
                                    value={superStataus}  required>

                            <option selected>Accept or Reject</option>
                                <option value="Under Consideration">Under Consideration</option>
                                <option value="Accepted">Accepted</option>
                                <option value="Rejected">Rejected</option>   
                            </select>
                     </div>  


                     <div style={{marginTop: 20,}}  className="mb-2 row">
                      <label className="col-sm-3 col-form-label">Co-Supervisor Name</label>
                        <div class="col-sm-9">
                          <input className="form-control w-50"  name="coSupervisor" value={coSupervisor} type="text" readOnly />
                        </div>
                      </div>

                      
                      <label className=" col-sm-3 col-form-label">Co-Supervisor Status</label>
                      <div className="col-sm-9">
                            <select className="form-select w-50" 
                                    style={{marginLeft:-65}}
                                    aria-label="Default select example"  
                                    onChange={(e) => setCosuperStataus(e.target.value)}
                                    value={coSuperStataus}  required>

                            <option selected>Accept or Reject</option>
                                <option value="Under Consideration">Under Consideration</option>
                                <option value="Accepted">Accepted</option>
                                <option value="Rejected">Rejected</option>   
                            </select>
                     </div>                 
      
              </div>
                        <input className="btn btn-primary" type="submit" value="submit" />
        </form>
      </div> */}
    </div>
  );
};

export default TopicAcceptorReject;
