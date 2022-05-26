import axios from 'axios'

const URL ="http://localhost:5000/researchtopics";

class ResearchTopicService{
    createResearchTopic(researchtopic){
        return axios.post(URL,researchtopic)
    }
}
export default new ResearchTopicService();