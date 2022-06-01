import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";

const TopicAcceptorReject = () => {

    // const [researchTopic, setResearchTopic] = useState([]);
      const [groupId, setGroupId] = useState("");
      const [activeStatus, setActiveStatus] = useState("");
      const history = useNavigate();
      const { _id } = useParams();

      useEffect(() => {        
        if (_id) {
            ResearchTopicService.getResearchTopicById(_id).then((res) => {
              console.log(res.data);
              console.log(res.data.researchtopics.groupId);
            setGroupId(res.data.researchtopics.groupId);
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
          activeStatus };

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
        //   ResearchTopicService.createResearchTopic(ResearchTopic).then((response) => {
        //       history("/StudentHome/TopicRegisterTable");
        //       console.log(response.data);
        //     })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      }
    };

  return (
    <div>
        <div className="card mx-auto" style={{width:600}}>

            <form onSubmit={(e) => {saveResearchTopic(e); }}>

              <div style={{marginTop: 20,}}  className="mb-3 row">

                <label className="col-sm-2 col-form-label">Group ID</label>
                  <div class="col-sm-9">
                   <input className="form-control "  name="groupId" value={groupId} type="text" />
                  </div>
             </div>
    
        <div style={{marginTop: 20,}} className="mb-3 row">
              <label className="col-sm-3 col-form-label">Active Status</label>


        <div class="col-sm-9">

          <select className="form-select" 
                  aria-label="Default select example"  
                  onChange={(e) => setActiveStatus(e.target.value)}
                  value={activeStatus}  required>

          <option selected>Accept or Reject</option>
              <option value="Under Consideration">Under Consideration</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
              
          </select>
        {/* <input              
          className="form-control "
          name="activeStatus"
          type="text"          
          onChange={(e) =>{setActiveStatus(e.target.value)}}
          required
        /> */}
        </div>
      
        </div>

        <input className="submitButton" type="submit" value="submit" />
      </form>
    </div>

    </div>
  )
}

export default TopicAcceptorReject