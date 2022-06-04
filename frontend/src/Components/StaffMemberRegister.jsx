import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";
import StaffMemberService from "../Services/StaffMemberService";
import { useParams } from "react-router";

function StaffMemberRegister(props) {
  const [username, setUsername] = useState("");
  const [name, setNmae] = useState("");
  const [role, setRole] = useState("");
  const [component, setComponent] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState();
  const [password, setPassword] = useState("");
  const { id } = useParams();

  let timerID = useRef(null);
  const history = useNavigate();

  useEffect(() => {
    return () => {
      clearTimeout(timerID);

      StaffMemberService.getStaffByID(id).then((res) => {
        console.log("res", res.data.staffMember);
        setUsername(res.data.staffMember.username);
        setNmae(res.data.staffMember.name);
        setEmail(res.data.staffMember.email);
        setMobileNo(res.data.staffMember.mobileNo);
        setPassword(res.data.staffMember.password);
        setRole(res.data.staffMember.role);
        setComponent(res.data.staffMember.component);
      });
    };
  }, []);

  const clickSubmit = (e) => {
    e.preventDefault();

    const user = { username, password, role };

    const submitData = {
      username,
      name,
      role,
      component,
      email,
      mobileNo,
      password,
    };

    console.log(submitData);

    if (id) {
      StaffMemberService.updateMember(id, submitData).then((res) => {
        console.log(res);
        history("/view-staff-member");
      });
    } else {
      AuthService.register(user).then((res) => {
        console.log(res);

        StaffMemberService.addStaffMember(submitData).then((res) => {
          console.log(res);
          history("/login");
        });
      });
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />

      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <center>
            <h1>Staff Registation</h1>
          </center>
          <br />
          <br />
          <form onSubmit={clickSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">IT no</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  placeholder="Enter IT no"
                  required="required"
                  minlength="4"
                  title="please enter at least 4 characters"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="username"
                  value={name}
                  onChange={(e) => setNmae(e.target.value)}
                  className="form-control"
                  placeholder="Enter username"
                  required="required"
                  minlength="4"
                  title="please enter at least 4 characters"
                />
              </div>
            </div>
            <br />

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">role</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                  required="required"
                >
                  <option selected>Choose...</option>
                  <option value="supervisor">supervisor</option>
                  <option value="co-supervisor">co-supervisor</option>
                  <option value="panel-member">panel-member</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">area</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="role"
                  value={component}
                  onChange={(e) => setComponent(e.target.value)}
                  className="form-control"
                  placeholder="Enter Role"
                  required="required"
                  minlength="4"
                  title="please enter at least 4 characters"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter Role"
                  required="required"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">mobile no</label>
              <div className="col-sm-10">
                <input
                  type="mobile"
                  name="mobile"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  className="form-control"
                  placeholder="Enter mobile number"
                  minlength="10"
                  maxlength="10"
                  title="please enter 10 digit mobile number"
                  pattern="[0-9]*"
                  required="required"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter Password"
                  required="required"
                  minlength="5"
                  maxlength="10"
                  title="please enter at least 5 characters"
                />
                <small id="emailHelp" class="form-text text-muted">
                  please enter at least 5 characters
                </small>
              </div>
            </div>
            <br />
            <center>
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </center>
          </form>
          {/* {message ? <Message message={message} /> : null} */}
        </div>
      </div>
    </div>
  );
}

export default StaffMemberRegister;
