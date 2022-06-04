import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";
import Swal from "sweetalert2";

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
      supervisor: "Not Assigned",
      superStataus: "Not Assigned",
      coSupervisor: "Not Assigned",
      coSuperStataus: "Not Assigned",
      panelMember_1: "Not Assigned",
      panelMember_2: "Not Assigned",
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
        supervisor: "Not Assigned",
        superStataus: "Not Assigned",
        coSupervisor: "Not Assigned",
        coSuperStataus: "Not Assigned",
        panelMember_1: "Not Assigned",
        panelMember_2: "Not Assigned",
      };

      ResearchTopicService.updateResearchTopic(_id, updateData).then((res) => {
        {
          console.log(res);
          Swal.fire(" successfully updated.");
          history("/StudentHome/TopicRegisterTable");
        }
      });
    } else {
      ResearchTopicService.createResearchTopic(ResearchTopic)
        .then((response) => {
          Swal.fire(" successfully registered.");
          history("/StudentHome/TopicRegisterTable");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const title = () => {
    if (_id) {
      return <h1 className="text-center"> Update Research Topic</h1>;
    }
    return <h1 className="text-center"> Add Research Topic</h1>;
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <div className="card shadow-lg w-50 mx-auto mt-5 p-3 text-center">
        <h1>{title()}</h1>
        <form
          onSubmit={(e) => {
            saveResearchTopic(e);
          }}
        >
          <div>
            <div className="row w-75 mx-auto mt-3">
              <label className=" col-sm-3 col-form-label">Group ID</label>
              <input
                name="groupId"
                className="form-control w-25"
                placeholder="Enter Group ID"
                type="text"
                value={groupId}
                onChange={(e) => {
                  setGroupId(e.target.value);
                }}
                required
              />
            </div>

            <div className="row w-75 mx-auto mt-3">
              <label className=" col-sm-3 col-form-label">Research Topic</label>
              <input
                name="researchTopic"
                className="form-control w-50"
                type="text"
                placeholder="Enter topic"
                value={researchTopic}
                onChange={(e) => {
                  setResearchTopic(e.target.value);
                }}
                required
              />
            </div>

            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-3 col-form-label">Field</label>
              <input
                name="field"
                className="form-control w-50"
                type="text"
                value={field}
                placeholder="Enter field"
                onChange={(e) => {
                  setField(e.target.value);
                }}
                required
              />
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
  );
};

export default TopicRegisterForm;
