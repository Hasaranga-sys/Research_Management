import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";
import TopicAcceptorReject from "./TopicAcceptorReject";

const TopicView = () => {
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
    
   
    
      const UpdateTopic = (_id) => {
      
        console.log({ _id });
        history(`/SupervisorHome/TopicView/TopicAcceptorReject/${_id}`);
      };
  return (
    <div>
     
    <div className="row hidden-md-up">
      
      <div className="shadow-lg card w-100 p-3 mx-auto mt-5 bg-light "  >
        <h2 className="text-center mt-2 mb-4">Research Topics</h2>

              <div className="container">
                  <input type="text" placeholder="Search By Group ID or Status" className="form-control mb-4 mx-auto mt-2"
                          style={{width: "40%" }} onChange={(e) => {setSearch(e.target.value); }} />
              </div>
        
        <div className="row ">
          <div className=" shadow card w-75 col-4 mb-4 mx-auto">

            <table className="table table-striped mt-3">
              <thead className="table-primary">
                <tr>
                  <th scope="col">Group ID</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Topic Status</th>
                  <th scope="col">Supervisor</th>
                  <th scope="col">Supervisor Status</th>
                  <th scope="col">Co-Supervisor</th>
                  <th scope="col">Co-Supervisor Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {researchtopics.filter((value) => {
                                  if (search === "") {
                                    return value;
                                  } else if (
                            
                                    value.groupId.toLowerCase().includes(search.toLowerCase())||
                                    value.activeStatus.toLowerCase().includes(search.toLowerCase())||
                                    value.supervisor.toLowerCase().includes(search.toLowerCase())||
                                    value.superStataus.toLowerCase().includes(search.toLowerCase())
                                    
                                  ) {
                                    return value;
                                  }
                                  return 0;
          }).map((researchtopic) => (
                  <tr key={researchtopic._id}>
                    <td>{researchtopic.groupId}</td>
                    <td>{researchtopic.researchTopic}</td>
                    <td>{researchtopic.activeStatus}</td>
                    <td>{researchtopic.supervisor}</td>
                    <td>{researchtopic.superStataus}</td>
                    <td>{researchtopic.coSupervisor}</td>
                    <td>{researchtopic.coSuperStataus}</td>
                    
                    <td>
                      <button className="btn btn-danger" onClick={() => UpdateTopic(researchtopic._id)}>
                        Update
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
    </div>
  )
}

export default TopicView