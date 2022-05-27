import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ResearchTopicService from '../../Services/ResearchTopicService';

const TopicRegisterForm = (props) => {
  const[researchTopic, setResearchTopic] = useState('')
  const [groupId, setGroupId] = useState("")
  const [activeStatus, setActiveStatus] = useState("pending");
  const history = useNavigate()

  const saveResearchTopic = (e) =>{
      e.preventDefault();
      const ResearchTopic = {researchTopic,groupId,activeStatus}
      console.log(ResearchTopic)

      ResearchTopicService.createResearchTopic(ResearchTopic).then((response)=>{
        history('/StudentHome/TopicRegisterTable')
          console.log(response.data)
      })
  }

return (
  <div className='container'>

    <form onSubmit={e =>{saveResearchTopic(e)}}>
      <label className="col-sm-2 col-form-label">Group ID</label>
      <input name='groupId' type='text' onChange={(e) =>setGroupId(e.target.value)} required />
      <br></br>

      <label className="col-sm-2 col-form-label">Research Topic</label>
      <input name='researchTopic' type='text' onChange={(e) =>setResearchTopic(e.target.value)} required />

      <input className='submitButton' type='submit' value='submit'/>

    </form>




      {/* <form>
          <label>ResearchTopic</label>
          <input type="text" 
                  name="researchTopic"
                   id="inputResearchTopic"
                    value={researchTopic} 
                    onChange={(e) =>setResearchTopic(e.target.value)} />

                    <button onClick={(e)=> saveResearchTopic(e) }>save</button>
      </form> */}
  </div>
)
}

export default TopicRegisterForm