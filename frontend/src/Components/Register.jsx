import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";
import Message from "./Message";

const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "", role: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);
  const history = useNavigate();

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const signUp = (e) => {
    //onChange
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const resetForm = () => {
    setUser({ username: "", password: "", role: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      console.log(data);
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          history("/login");
        }, 20);
      }
    });
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <center>
            <h1> Registation</h1>
          </center>
          <br />
          <br />
          <form onSubmit={onSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={signUp}
                  className="form-control"
                  placeholder="Enter username"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Role</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="role"
                  value={user.role}
                  onChange={signUp}
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
                  value={user.password}
                  onChange={signUp}
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </form>
          {message ? <Message message={message} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Register;
