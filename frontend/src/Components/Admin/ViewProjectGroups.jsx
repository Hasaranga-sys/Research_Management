import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";

const ViewProjectGroups = () => {
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
    
        history(`/StudentHome/TopicRegisterTable/TopicRegisterForm/${_id}`);
      };

      const AddPanelMembers = (_id) =>{
        console.log({_id});
        history(`/AdminHome/ViewStudentGroups/AddPanelMembers/${_id}`);
      };
      
        

  return (
    <div style={{width: 1500}} className="shadow card mx-auto mt-5 mb-5">
      <h2 className="text-center mt-4">View Project Groups</h2>

      <input
        type="text"
        placeholder="search by Document name"
        className=" form-control mt-3 w-25 mx-auto"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="row">
        <div style={{width: 1400}} className="shadow-lg card mx-auto mt-5 mb-5">

          <table className="table table-striped">
            <thead className="table-primary">
              <tr>
                <th scope="col">Group ID</th>
                <th scope="col">Topic</th>
                <th scope="col">Field</th>
                <th scope="col">Topic Status</th>
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
                    <td>
                      {researchtopic.panelMember_1}
                      <br></br>
                      {researchtopic.panelMember_2}
                    </td>
                    <td>
                    <button type="button" class="btn btn-primary"
                            onClick={()=>AddPanelMembers(researchtopic._id)} >Add Panel Members</button>                  

                  
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewProjectGroups