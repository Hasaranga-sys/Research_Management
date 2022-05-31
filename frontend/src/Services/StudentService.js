import axios from "axios";

const API_URL = "http://localhost:5000";

class StudentService {
  addStudent(student) {
    return axios.post(`${API_URL}/student/`, student);
  }

  // getLogin(email, password) {
  //   return axios.get(`${API_URL}/login/${email}/${password}`);
  // }

  //   login(user) {
  //     return axios.post(`${API_URL}/user/Login`, user);
  //   }
}
export default new StudentService();
