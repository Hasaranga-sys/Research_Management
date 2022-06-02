import axios from "axios";

const API_URL = "http://localhost:5000";

class StaffMemberService {
  addStaffMember(member) {
    return axios.post(`${API_URL}/staffMember/`, member);
  }

  getAllStaffMembers() {
    return axios.get(`${API_URL}/staffMember/`);
  }
  updateMember(id, staffMember) {
    return axios.put(`${API_URL}/staffMember/${id}`, staffMember);
  }

  //   login(user) {
  //     return axios.post(`${API_URL}/user/Login`, user);
  //   }
}
export default new StaffMemberService();
