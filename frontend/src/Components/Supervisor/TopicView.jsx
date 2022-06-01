import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";
import TopicAcceptorReject from "./TopicAcceptorReject";

const TopicView = () => {
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
    
   
    
      const UpdateTopic = (_id) => {
        console.log({ _id });
        history(`/SupervisorHome/TopicView/TopicAcceptorReject/${_id}`);
      };
  return (
    <div>
     
    <div className="row hidden-md-up">
      
      <div className="card w-75 p-3 offset-md-1 bg-light "  >
        <h2 className="text-center">Research Topics</h2>
        <div className="row ">
          <div className="card w-50 col-4 mx-auto">

            <table className="table tav=ble-striped">
              <thead>
                <tr>
                  <th scope="col">Group ID</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {researchtopics.map((researchtopic) => (
                  <tr key={researchtopic._id}>
                    <td>{researchtopic.groupId}</td>
                    <td>{researchtopic.researchTopic}</td>
                    <td>{researchtopic.activeStatus}</td>
                    <td>
                      <button onClick={() => UpdateTopic(researchtopic._id)}>
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