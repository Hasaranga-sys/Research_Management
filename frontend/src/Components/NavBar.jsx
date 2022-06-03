import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const NavBar = (props) => {
  const navigate = useNavigate();

  const { isAuthenticated, user, setIsAuthenticated, setUser } =
    useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
        navigate("/login");
      }
    });
  };

  const unAuthenticatedNavBar = () => {
    return (
      <>
        {/* <Link to="/">
              <li className='nav-item nav-link'>
                Home
              </li>
            </Link> */}
        {/* <li className='nav-item'>
              <a className='nav-link active' aria-current="page" href="/login">Login</a>
            </li>
           */}
        <a className="nav-link active" aria-current="page" href="/">
          Home
        </a>
        {/* <a className='nav-link active' aria-current="page" href="/fileAdd">addfile</a>
            <a className='nav-link active' aria-current="page" href="/fileUploadHome">HomeFile</a>
             */}
        <a className="nav-link active" aria-current="page" href="/login">
          Login
        </a>

        {/* <a
          className="nav-link active"
          aria-current="page"
          href="/student/register-student"
        >
          Student-Register
        </a> */}

        {/* <a
          className="nav-link active"
          aria-current="page"
          href="/register-staff-member"
        >
          Staff-Register
        </a> */}

        {/* <Link to="/login">
              <li className='nav-item nav-link'>
                Login
              </li>
            </Link>

            <Link to="/register">
              <li className='nav-item nav-link'>
                Register
              </li>
            </Link> */}
      </>
    );
  };

  const AuthenticatedNavBar = () => {
    return (
      <>
        {/* <a className='nav-link active' aria-current="page" href="/fileAdd">addfile</a>
            <a className='nav-link active' aria-current="page" href="/fileUploadHome">HomeFile</a> */}
        {/* <Link to="/">
            <li className='nav-item nav-link'>
              Home
            </li>
          </Link>   
          <li className='nav-item'>
              <a className='nav-link active' aria-current="page" href="/">Home</a>
            </li>    

          <Link to="/todos">
            <li className='nav-item nav-link'>
              Todos
            </li>
          </Link> */}
        {user.role === "admin" ? (
          <li className="nav-item nav-link">
            <a className="nav-link" href="/AdminHome">
              Admin Home
            </a>
          </li>
        ) : user.role == "user" ? (
          <li className="nav-item nav-link">
            <a className="nav-link" href="/StudentHome">
              Student Home
            </a>
          </li>
        ) : user.role == "supervisor" || user.role == "co-supervisor" ? (
          <li className="nav-item nav-link">
            <a className="nav-link" href="/SupervisorHome">
              Supervisor Home
            </a>
          </li>
        ) : user.role == "panel-member" ? (
          <li className="nav-item nav-link">
            <a className="nav-link" href="/panelMemberHome">
              Panel Member Home
            </a>
          </li>
        ) : null}

        <button
          type="button"
          className="btn btn-link nav-item nav-link"
          onClick={onClickLogoutHandler}
        >
          Logout
        </button>
      </>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
          {/*     
        <div className="navbar-brand">Research</div> */}
          <li className="nav-item">
            <span class="fs-5 text-white font-weight-bold">
              Research Management Tool
            </span>
          </li>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto ">
              {!isAuthenticated
                ? unAuthenticatedNavBar()
                : AuthenticatedNavBar()}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
