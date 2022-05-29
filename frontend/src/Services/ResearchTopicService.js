import axios from 'axios'

const URL ="http://localhost:5000/researchtopics";

class ResearchTopicService{

    async getAllResearchTopics(){
        const res = await axios.get(URL);
        return res.data;
    }

    createResearchTopic(researchtopic){
        return axios.post(URL,researchtopic)
    }
    async getResearchTopicById(_id){
        const res = await axios.get(URL + '/' + _id);
        return res.data;
    }
    updateResearchTopic(researchtpoicId, researchtopic){
        return axios.put(URL + '/' + researchtpoicId, researchtopic);
    }
    deleteReseatchTopicById(researchtpoicId){
        return axios.delete(URL + '/' + researchtpoicId);
    }
}
export default new ResearchTopicService();