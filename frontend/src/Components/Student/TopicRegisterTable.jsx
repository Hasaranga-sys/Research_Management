import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";

const TopicRegisterTable = () => {
  const [researchtopics, setResearchtopics] = useState([]);
  const history = useNavigate();
  const [search, setSearch] = useState("");

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

  const reqCoSuper = (_id) => {
    console.log({ _id });
    history(`/req-co-supervisor/${_id}`);
  };

  return (
    <div className="shadow card w-75 mx-auto mt-5 mb-5">
      <h2 className="text-center mt-4">Register Research Topics</h2>

      <input
        type="text"
        placeholder="search by Document name"
        className="shadow form-control mt-3 w-25 mx-auto"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="row">
        <div className="shadow card w-75 mx-auto mt-5 mb-5">
          <button
            className="btn btn-primary w-25 mx-3 mt-2 mb-2"
            onClick={addTopic}
          >
            Add topic
          </button>

          <table className="table table-striped">
            <thead className="table-primary">
              <tr>
                <th scope="col">Group ID</th>
                <th scope="col">Topic</th>
                <th scope="col">Field</th>
                <th scope="col">Status</th>
                <th scope="col">supervisor</th>
                <th scope="col">super-Status</th>
                <th scope="col">co-supervisor</th>
                <th scope="col">co-super-Status</th>
                <th scope="col">Panel Members</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {researchtopics
                .filter((value) => {
                  if (search === "") {
                    return value;
                  } else if (
                    //value.id.toString(includes(search))
                    value.groupId
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    value.activeStatus
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return value;
                  }
                  return 0;
                })
                .map((researchtopic) => (
                  <tr key={researchtopic._id}>
                    <td>{researchtopic.groupId}</td>
                    <td>{researchtopic.researchTopic}</td>
                    <td>{researchtopic.field}</td>
                    <td>{researchtopic.activeStatus}</td>
                    <td>{researchtopic.supervisor}</td>
                    <td>{researchtopic.superStataus}</td>
                    <td>{researchtopic.coSupervisor}</td>
                    <td>{researchtopic.coSuperStataus}</td>
                    <td>{researchtopic.panelMember_1}<br></br>
                        {researchtopic.panelMember_2}
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => UpdateTopic(researchtopic._id)}
                      >
                        Update
                      </button>
                      <button onClick={() => reqSuper(researchtopic._id)}>
                        req super
                      </button>
                      <button onClick={() => reqCoSuper(researchtopic._id)}>
                        req co-super
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopicRegisterTable;
