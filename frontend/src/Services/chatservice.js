import axios from "axios";

class ChatService{
    addchat(chat){
        return axios.post("http://localhost:5000/chat/", chat);
    }
    getAllchats(){
        return axios.get("http://localhost:5000/chat/");
    }
}

export default new ChatService();