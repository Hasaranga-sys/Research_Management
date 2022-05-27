import axios from 'axios'

const URL ="http://localhost:5000/researchtopics";

class ResearchTopicService{

    getAllResearchTopics(){
        return axios.get(URL).then((res)=>res.data);
    }

    createResearchTopic(researchtopic){
        return axios.post(URL,researchtopic)
    }
    getResearchTopicById(_id){
        return axios.get(URL + '/' + _id).then((res)=>res.data);
    }
    updateResearchTopic(researchtpoicId, researchtopic){
        return axios.put(URL + '/' + researchtpoicId, researchtopic);
    }
    deleteReseatchTopicById(researchtpoicId){
        return axios.delete(URL + '/' + researchtpoicId);
    }
}
export default new ResearchTopicService();