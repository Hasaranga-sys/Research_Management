import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";

const TopicRegisterTable = () => {
  const [researchtopics, setResearchtopics] = useState([]);
  const history = useNavigate();

  const getResearchTopics = () => {
    ResearchTopicService.getAllResearchTopics().then((data) => {
      setResearchtopics(data.researchtopics);
      console.log(researchtopics);
    });
  };

  useEffect(() => {
    getResearchTopics();
  }, []);

  const addTopic = (e) => {
    e.preventDefault();
    console.log("clicked add topic");
    history(`/StudentHome/TopicRegisterTable/TopicRegisterForm`);
  };

  const UpdateTopic = (_id) => {
    console.log({ _id });
    history(`/StudentHome/TopicRegisterTable/TopicRegisterForm/${_id}`);
  };

  const reqSuper = (_id) => {
    console.log({ _id });
    history(`/req-supervisor/${_id}`);
  };

  return (
    <div className="bg-light">
      <div className="container">
        <h2>Register Research Topics</h2>
        <div className="row">
          <div className="card col-md-10 offset-md-1 offset-md-2">
            {/* <Link
              to="/StudentHome/TopicRegisterTable/TopicRegisterForm"
              className="btn btn-primary mb-2"
            >
              Add Research Topic
            </Link> */}
            <button onClick={addTopic}>Add topic</button>

            <table className="table tav=ble-striped">
              <thead>
                <tr>
                  <th scope="col">Group ID</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Field</th>
                  <th scope="col">Status</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {researchtopics.map((researchtopic) => (
                  <tr key={researchtopic._id}>
                    <td>{researchtopic.groupId}</td>
                    <td>{researchtopic.researchTopic}</td>
                    <td>{researchtopic.field}</td>
                    <td>{researchtopic.activeStatus}</td>
                    <td>
                      <button onClick={() => UpdateTopic(researchtopic._id)}>
                        Update
                      </button>
                      <button onClick={() => reqSuper(researchtopic._id)}>
                        req super
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
    // <div>
    //     <Link to="/StudentHome/TopicRegisterTable/TopicRegisterForm">
    //         <button>add research topic</button>
    //     </Link>
    // </div>
  );
};

export default TopicRegisterTable;
