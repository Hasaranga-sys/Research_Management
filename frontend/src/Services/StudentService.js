import axios from "axios";

const API_URL = "http://localhost:5000";

class StudentService {
  addStudent(student) {
    return axios.post(`${API_URL}/student/`, student);
  }

  viewAllStudent() {
    return axios.get(`${API_URL}/student/`);
  }

  getStudentByID(id) {
    return axios.get(`${API_URL}/student/${id}`);
  }

  updateStudent(id, student) {
    return axios.put(`${API_URL}/student/${id}`, student);
  }

  deleteStudent(id) {
    return axios.delete(`${API_URL}/student/${id}`);
  }
}
export default new StudentService();
