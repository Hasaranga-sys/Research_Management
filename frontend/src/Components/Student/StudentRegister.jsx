import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import StudentService from "../../Services/StudentService";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const StudentRegister = (props) => {
  // const [user, setUser] = useState({ username: "", password: "", role: "" });

  const [username, setUsername] = useState("");
  const [name, setNmae] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState();
  const [password, setPassword] = useState("");
  const { id } = useParams();

  let timerID = useRef(null);
  const history = useNavigate();

  useEffect(() => {
    return () => {
      clearTimeout(timerID);

      StudentService.getStudentByID(id).then((res) => {
        console.log(res.data.student);
        setUsername(res.data.student.username);
        setNmae(res.data.student.name);
        setEmail(res.data.student.email);
        setMobileNo(res.data.student.mobileNo);
        setPassword(res.data.student.password);
      });
    };
  }, []);

  // const signUp = (e) => {
  //   //onChange
  //   setUser({ ...user, [e.target.name]: e.target.value });
  //   console.log(user);
  // };

  // const resetForm = () => {
  //   setUser({ username: "", password: "", role: "" });
  // };

  const clickSubmit = (e) => {
    e.preventDefault();

    const user = { username, password, role: "user" };

    const submitData = { username, name, email, mobileNo, password };

    console.log(submitData);

    if (id) {
      StudentService.updateStudent(id, submitData).then((res) => {
        console.log(res);
        Swal.fire(" succesfully updated");
        history("/admin/view-users");
      });
    } else {
      AuthService.register(user).then((res) => {
        console.log(res);

        StudentService.addStudent(submitData).then((res) => {
          console.log(res);
          Swal.fire(" succesfully registered");
          history("/login");
        });
      });
    }
  };

  const title = () => {
    if (id) {
      return <h1 className="text-center"> Update Student</h1>;
    }
    return <h1 className="text-center"> Register Student</h1>;
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />

      <div className="card shadow-lg bg-light col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <center>
            <h1>{title()}</h1>
          </center>
          <br />
          <br />
          <form onSubmit={clickSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">IT number</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  placeholder="Enter IT number"
                  required="required"
                  minlength="10"
                  maxlength="10"
                  title="please enter valid IT number"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Full Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="username"
                  value={name}
                  onChange={(e) => setNmae(e.target.value)}
                  className="form-control"
                  placeholder="Enter Full Name"
                  required="required"
                  minlength="5"
                  title="please enter at least 5 characters"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter email"
                  required="required"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Mobile No</label>
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
          <br />
          <div className="text-center">
            create an account{" "}
            <Link to="/register-staff-member" className="text-center">
              Regiser as a staff member{" "}
            </Link>
          </div>

          {/* {message ? <Message message={message} /> : null} */}
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
