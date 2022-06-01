import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";
import StaffMemberService from "../Services/StaffMemberService";

function StaffMemberRegister() {
  const [username, setIdNo] = useState("");
  const [name, setNmae] = useState("");
  const [role, setRole] = useState("");
  const [component, setComponent] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState();
  const [password, setPassword] = useState("");

  let timerID = useRef(null);
  const history = useNavigate();

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
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

    AuthService.register(user).then((res) => {
      console.log(res);

      StaffMemberService.addStaffMember(submitData).then((res) => {
        console.log(res);
      });
    });
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />

      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <center>
            <h1>Student Registation</h1>
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
                  onChange={(e) => setIdNo(e.target.value)}
                  className="form-control"
                  placeholder="Enter username"
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
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">email</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="role"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter Role"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">mobile no</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="role"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  className="form-control"
                  placeholder="Enter Role"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </form>
          {/* {message ? <Message message={message} /> : null} */}
        </div>
      </div>
    </div>
  );
}

export default StaffMemberRegister;
