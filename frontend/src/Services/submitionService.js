import axios from "axios";

class submitionService {
  addsubmition(submition) {
    return axios.post("http://localhost:5000/submition/", submition);
  }
  getAllsubmitions() {
    return axios.get("http://localhost:5000/submition/");
  }
  getsubmition(id) {
    return axios.get(`http://localhost:5000/submition/${id}`);
  }
  updateSubmition(id, submition) {
    return axios.put(`http://localhost:5000/submition/${id}`, submition);
  }
  deleteSubmition(id) {
    return axios.delete(`http://localhost:5000/submition/${id}`);
  }
}

export default new submitionService();
