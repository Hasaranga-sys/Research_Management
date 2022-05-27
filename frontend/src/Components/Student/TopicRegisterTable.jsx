import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import ResearchTopicService from '../../Services/ResearchTopicService';

const TopicRegisterTable = () => {

  const [researchtopics, setResearchtopics] = useState([])
  const history = useNavigate();
  
  useEffect(() => {
    getResearchTopics();
  }, [])

  const getResearchTopics = () =>{
    ResearchTopicService.getAllResearchTopics()
          .then((data)=>{
            setResearchtopics(data.researchtopics)
            console.log(researchtopics);
          })
  }
  

  return (
    <div className='bg-light'>
      <div className='container'>
        <h2>Register Research Topics</h2>
          <div className='row'>
            <div className='card col-md-10 offset-md-1 offset-md-2'>
              <Link to="/StudentHome/TopicRegisterTable/TopicRegisterForm" className='btn btn-primary mb-2'>Add Research Topic</Link>

                <table className='table tav=ble-striped'>
                  <thead>
                    <tr>
                      <th scope='col'>Group ID</th>
                      <th scope='col'>Topic</th>
                      <th scope='col'>Status</th>
                      <th scope='col'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      researchtopics.map(
                        (researchtopic)=>
                          <tr key={researchtopic._id}>
                            <td>{researchtopic.groupId}</td>
                            <td>{researchtopic.researchTopic}</td>
                            <td>{researchtopic.activeStatus}</td>
                            <td><Link className='btn btn-info'
                                      to={`/StudentHome/TopicRegisterTable/TopicRegisterForm/${researchtopic._id}`}> Update</Link></td>

                          </tr>
                        
                      )
                    }
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
  )
}

export default TopicRegisterTable