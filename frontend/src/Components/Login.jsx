import React, { useContext, useState } from "react";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import Message from "./Message";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = (props) => {
  // const {isAuthenticated,userl,setIsAuthenticated,setUserl} = useContext(AuthContext);

  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  const history = useNavigate();

  const signIn = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        if (user.role === "admin") {
          history("/AdminHome");
        } else if (user.role === "user") {
          history("/studentHome");
        } else if (user.role === "panel-member") {
          history("/panelMemberHome");
        } else if (user.role === "supervisor") {
          history("/SupervisorHome");
        } else if (user.role === "co-supervisor") {
          history("/SupervisorHome");
        }
      } else {
        setMessage(message);
        function myFunction() {
          // alert("Error : Wrong Username or Password");
          Swal.fire({
            icon: "error",
            title: "Wrong IT No or Password",
            text: "please enter a valid IT No and Password!",
          });
        }
        myFunction();
      }
    });
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="card shadow-lg col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <center>
            <h1>Login</h1>
          </center>
          <br />
          <br />
          <form onSubmit={onSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">IT number</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="username"
                  onChange={signIn}
                  className="form-control"
                  placeholder="Enter IT number"
                  required="required"
                  minlength="3"
                  maxlength="10"
                  title="please enter valid IT number"
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
                  onChange={signIn}
                  className="form-control"
                  placeholder="Enter Password"
                  required="required"
                  // minlength="4"
                  // title="please enter at least 4 characters"
                />
              </div>
            </div>
            <br />
            <center>
              <button className="btn btn-primary" type="submit">
                Sign in
              </button>
            </center>
          </form>
          <br />
          <div className="text-center">
            create an account{" "}
            <Link to="/student/register-student" className="text-center">
              Sign up{" "}
            </Link>
          </div>
          {message ? <Message message={message} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
