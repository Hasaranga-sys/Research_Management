import React, { useContext, useState } from "react";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import Message from "./Message";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  // const {isAuthenticated,userl,setIsAuthenticated,setUserl} = useContext(AuthContext);

  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  const history = useNavigate();

    const signIn = (e) =>{
           
        setUser({...user,[e.target.name] : e.target.value});
        console.log(user);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            console.log(data);
            const {isAuthenticated,user,message} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                if(user.role === "admin"){            
                    history('/AdminHome');}
                    else if(user.role === "user"){
                    history('/studentHome');}
                    else if(user.role ==="panel-member"){
                        history('/panelMemberHome')}
                    else if(user.role === "supervisor"){
                        history('/SupervisorHome')
                    }
            }else{
                setMessage(message);
                function myFunction(){
                    alert("Error : Wrong Username or Password")
                }
                myFunction();
            }
        })

    }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   AuthService.login(user).then((data) => {
  //     console.log(data);
  //     const { isAuthenticated, user, message } = data;
  //     if (isAuthenticated) {
  //       authContext.setUser(user);
  //       authContext.setIsAuthenticated(isAuthenticated);
  //       if (user.role === "admin") {
  //         history("/AdminHome");
  //       } else if (user.role === "user") {
  //         history("/studentHome");
  //       }
  //     } else {
  //       setMessage(message);
  //     }
  //   });
  // };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <div>
            <h2>Login</h2>
          </div>
          <br />
          <br />
          <form onSubmit={onSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="username"
                  onChange={signIn}
                  className="form-control"
                  placeholder="Enter username"
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
                  onChange={signIn}
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <br />

            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
          {message ? <Message message={message} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
