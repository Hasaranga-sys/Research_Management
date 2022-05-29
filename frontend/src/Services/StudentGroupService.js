import axios from "axios";

const URL = "http://localhost:5000/studentGroup";

class studentGroupService{
    getAllStudentGroups(){
        return axios.get(URL).then((res)=>res.data);
    }

    getStudentGroupById(_id){
        return axios.get(`http://localhost:5000/studentGroup/${_id}`).then((res)=>res.data);
    }

    AddStudentGroup(studentgroup){
        return axios.post(URL,studentgroup)
    }

    UpdateStudentGroup(_id,studentgroup){

        return axios.put(`http://localhost:5000/studentGroup/${_id}`, studentgroup)

    }

    DeleteStudentGroup(id){
        return axios.delete(`http://localhost:5000/studentGroup/${id}`)
    }
}
export default new studentGroupService();