import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const NavBar = (props) => {
  const navigate = useNavigate();

  const { isAuthenticated, user, setIsAuthenticated, setUser } =  useContext(AuthContext);

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
    return (    <>
             
        <a className="nav-link active" aria-current="page" href="/login">
          
        </a>
      </>
    );
  };

  const AuthenticatedNavBar = () => {
    return (
      <>
      
        {user.role == "admin" ? (
          <li className="nav-item nav-link active" aria-current="page">
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
                type="button"  className="btn btn-link nav-item nav-link"  
                onClick={onClickLogoutHandler} >  Logout  </button>
      </>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
          {/*     
        <div className="navbar-brand">Research</div> */}
          
            <span class="fs-5 text-white font-weight-bold">
                Research Management Tool
            </span>
         

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
