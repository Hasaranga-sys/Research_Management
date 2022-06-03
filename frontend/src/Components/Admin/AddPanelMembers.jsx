import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";

const AddPanelMembers = () => {
    const [researchTopic, setResearchTopic] = useState("");
  const [groupId, setGroupId] = useState("");
  const [field, setField] = useState("");
  const [panelMember_1, setPanelMember_1]= useState("");
  const [panelMember_2, setPanelMember_2]= useState("");
 
  const history = useNavigate();
  const { _id } = useParams();

  useEffect(() => {
    if (_id) {
      ResearchTopicService.getResearchTopicById(_id).then((res) => {
        console.log(res.data);
        setGroupId(res.data.researchtopics.groupId);
        setResearchTopic(res.data.researchtopics.researchTopic);
        setField(res.data.researchtopics.field);
        setPanelMember_1(res.data.researchtopics.panelMember_1);
        setPanelMember_2(res.data.researchtopics.panelMember_2);

      });
    }
  }, []);
  console.log(groupId);
  console.log(researchTopic);
  console.log(field);
  console.log(panelMember_1);

  const saveResearchTopic = (e) => {
    e.preventDefault();
    const ResearchTopic = {
      researchTopic,
      groupId,
      field,
      panelMember_1,
      panelMember_2
      
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
      
      };

      ResearchTopicService.updateResearchTopic(_id, updateData).then((res) => {
        {
          console.log(res);
          history("/AdminHome/ViewProjectGroups");
        }
      });

    } else {
      ResearchTopicService.createResearchTopic(ResearchTopic)
        .then((response) => {
          history("/AdminHome/ViewProjectGroups");
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
          value={groupId} onChange={(e) => {setGroupId(e.target.value);}} readOnly/>
        </div>

        <div className="row w-75 mx-auto mt-3">
        <label className=" col-sm-3 col-form-label">Research Topic</label>
        <input name="researchTopic" className="form-control w-50" type="text"
          value={researchTopic} onChange={(e) => {setResearchTopic(e.target.value);}} readOnly/>
        </div>

        <div className="row w-75 mx-auto mt-3">
        <label className="col-sm-3 col-form-label">Field</label>
        <input name="field" className="form-control w-50" type="text"
          value={field} onChange={(e) => {setField(e.target.value);}} readOnly/>
        </div>

        <div className="row w-75 mx-auto mt-3">
        <label className="col-sm-3 col-form-label">Panel Member</label>
        <input name="field" className="form-control w-50" type="text"
          value={panelMember_1} onChange={(e) => {setPanelMember_1(e.target.value);}} required/>
        </div>

        <div className="row w-75 mx-auto mt-3">
        <label className="col-sm-3 col-form-label">Panel Member</label>
        <input name="field" className="form-control w-50" type="text"
          value={panelMember_2} onChange={(e) => {setPanelMember_2(e.target.value);}} required/>
        </div>
        
        
        <div className="row w-75 mx-auto mt-3 mb-4">
        <input className="btn btn-primary mt-4 mx-auto" type="submit"  value="submit" />
        </div>
        </div>
        
       

      </form>
    </div>
  )
}

export default AddPanelMembers