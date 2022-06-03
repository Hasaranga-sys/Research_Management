import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";

const TopicRegisterForm = (props) => {
  const [researchTopic, setResearchTopic] = useState("");
  const [groupId, setGroupId] = useState("");
  const [field, setField] = useState("");
  const [activeStatus, setActiveStatus] = useState("pending");
  const history = useNavigate();
  const { _id } = useParams();

  useEffect(() => {
    if (_id) {
      ResearchTopicService.getResearchTopicById(_id).then((res) => {
        console.log(res.data);
        setGroupId(res.data.researchtopics.groupId);
        setResearchTopic(res.data.researchtopics.researchTopic);
        setField(res.data.researchtopics.field);
      });
    }
  }, []);

  console.log(groupId);
  console.log(researchTopic);
  console.log(field);

  const saveResearchTopic = (e) => {
    e.preventDefault();
    const ResearchTopic = {
      researchTopic,
      groupId,
      field,
      activeStatus,
    };

    console.log(ResearchTopic);

    if (_id) {
      ResearchTopicService.updateResearchTopic(_id, ResearchTopic)
        .then((res) => {
          {
            console.log(res);
            // history("/StudentHome/TopicRegisterTable");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      const updateData = {
        activeStatus: "pending",
        supervisor: "pending",
        superStataus: "pending",
        coSupervisor: "pending",
        coSuperStataus: "pending",
        panelMember_1: "Not Yet Allocated",
        panelMember_2: "Not Yet Allocated",
      };

      ResearchTopicService.updateResearchTopic(_id, updateData).then((res) => {
        {
          console.log(res);
          history("/StudentHome/TopicRegisterTable");
        }
      });

    } else {
      ResearchTopicService.createResearchTopic(ResearchTopic)
        .then((response) => {
          history("/StudentHome/TopicRegisterTable");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const title = ()=>{
    if(_id){
      return <h2 className="text-center"> Update Research Topic</h2>
    }
    return <h2 className="text-center"> Add Research Topic</h2>
  }

  return (
    <div className="card shadow-lg w-50 mx-auto mt-5 p-3 text-center">
      <h1>{title()}</h1>
      <form
        onSubmit={(e) => {
          saveResearchTopic(e);
        }}
      >
        <div className="card shadow-lg bg-light mb-3 mt-3">
        <div className="row w-75 mx-auto mt-3">
        <label className=" col-sm-3 col-form-label">Group ID</label>
        <input name="groupId" className="form-control w-25" type="text"
          value={groupId} onChange={(e) => {setGroupId(e.target.value);}} required/>
        </div>

        <div className="row w-75 mx-auto mt-3">
        <label className=" col-sm-3 col-form-label">Research Topic</label>
        <input name="researchTopic" className="form-control w-50" type="text"
          value={researchTopic} onChange={(e) => {setResearchTopic(e.target.value);}} required/>
        </div>

        <div className="row w-75 mx-auto mt-3">
        <label className="col-sm-3 col-form-label">Field</label>
        <input name="field" className="form-control w-50" type="text"
          value={field} onChange={(e) => {setField(e.target.value);}} required/>
        </div>
        
        <div className="row w-75 mx-auto mt-3 mb-4">
        <input className="btn btn-primary mt-4 mx-auto" type="submit"  value="submit" />
        </div>
        </div>
        
       

      </form>
    </div>
  );
};

export default TopicRegisterForm;
