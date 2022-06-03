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
        activeStatus: "no",
        supervisor: "no",
        superStataus: "no",
        coSupervisor: "no",
        coSuperStataus: "no",
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

  return (
    <div className="card shadow w-50 mx-auto mt-5 p-3 text-center">
      <h1>t</h1>
      <form
        onSubmit={(e) => {
          saveResearchTopic(e);
        }}
      >
        <label className="col-sm-2 col-form-label">Group ID</label>
        <input
          name="groupId"
          type="text"
          value={groupId}
          onChange={(e) => {
            setGroupId(e.target.value);
          }}
          required
        />
        <br></br>
        <div style={{ width: 800 }} className="row">
          <label className="col-sm-2 col-form-label">Research Topic</label>
          <input
            name="researchTopic"
            type="text"
            value={researchTopic}
            onChange={(e) => {
              setResearchTopic(e.target.value);
            }}
            required
          />
        </div>

        <label className="col-sm-2 col-form-label">Field</label>
        <input
          name="researchTopic"
          type="text"
          value={field}
          onChange={(e) => {
            setField(e.target.value);
          }}
          required
        />

        <input
          className="btn btn-primary mt-4 mx-auto"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default TopicRegisterForm;
