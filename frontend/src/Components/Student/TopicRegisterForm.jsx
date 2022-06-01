import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";

const TopicRegisterForm = (props) => {

      const [researchTopic, setResearchTopic] = useState([]);
      const [groupId, setGroupId] = useState("");
      const [activeStatus, setActiveStatus] = useState("pending");
      const history = useNavigate();
      const { _id } = useParams();

      useEffect(() => {        
            if (_id) {
                ResearchTopicService.getResearchTopicById(_id).then((res) => {
                  console.log(res.data.researchtopics)
                setGroupId(res.data.researchtopics.groupId);
                setResearchTopic(res.data.researchtopics.researchTopic);
              });
            }
      }, []);

        console.log(groupId);
        console.log(researchTopic);




      const saveResearchTopic = (e) => {
        e.preventDefault();
        const ResearchTopic ={ 
              researchTopic, 
              groupId, 
              activeStatus };

        console.log(ResearchTopic);

          if (_id) {
            ResearchTopicService.updateResearchTopic(_id, ResearchTopic)
              .then((res) => {
                {
                  console.log(res);
                  history("/StudentHome/TopicRegisterTable");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
              ResearchTopicService.createResearchTopic(ResearchTopic).then((response) => {
                  history("/StudentHome/TopicRegisterTable");
                  console.log(response.data);
                })
              .catch((error) => {
                console.log(error);
              });
          }
        };

      


  return (
    <div className="card shadow w-50 mx-auto mt-5 p-3 text-center">
      <h1>t</h1>
      <form
        onSubmit={(e) => {
          saveResearchTopic(e);
        }}
      >
        <div className="row mx-auto">
        <label className="col-sm-2 col-form-label mx-6 ">Group ID</label>
        <input name="groupId" type="text" className="form-control w-25" value={groupId}
                onChange={(e) =>{setGroupId(e.target.value)}} required/>
                </div>
        <br></br>
        <div style={{width:800}} className="row">
        <label className="col-sm-2 col-form-label">Research Topic</label>
        <input name="researchTopic" type="text"  className="form-control w-25" value={researchTopic}      
                onChange={(e) =>{setResearchTopic(e.target.value)}} required />
                </div>

        <input className="btn btn-primary mt-4 mx-auto" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default TopicRegisterForm;
