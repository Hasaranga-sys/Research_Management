import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";

const TopicAcceptorReject = () => {

    // const [researchTopic, setResearchTopic] = useState([]);
      const [groupId, setGroupId] = useState("");
      const [activeStatus, setActiveStatus] = useState("");
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
    const ResearchTopic ={ 
        //   researchTopic, 
          groupId, 
          activeStatus,
          supervisor,
          superStataus,
          coSupervisor,
          coSuperStataus };

    console.log(ResearchTopic);

      if (_id) {
        ResearchTopicService.updateResearchTopic(_id, ResearchTopic)
          .then((res) => {
            {
              console.log(res);
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
      </div>

    </div>
  )
}

export default TopicAcceptorReject