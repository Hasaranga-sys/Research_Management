import React,{useState, useEffect} from 'react'
import ResearchTopicService from '../Services/ResearchTopicService'

const ResearchTopicForm = (props) => {
    const[researchTopic, setResearchTopic] = useState('')

    const saveResearchTopic = (e) =>{
        e.preventDefault();
        const ResearchTopic = {researchTopic}
        console.log(ResearchTopic)

        ResearchTopicService.createResearchTopic(ResearchTopic).then((response)=>{
            console.log(response.data)
        })
    }

  return (
    <div className='container'>
        <form>
            <label>ResearchTopic</label>
            <input type="text" 
                    name="researchTopic"
                     id="inputResearchTopic"
                      value={researchTopic} 
                      onChange={(e) =>setResearchTopic(e.target.value)} />

                      <button onClick={(e)=> saveResearchTopic(e) }>save</button>
        </form>
    </div>
  )
}

export default ResearchTopicForm