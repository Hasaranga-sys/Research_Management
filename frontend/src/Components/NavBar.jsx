import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthService from '../Services/AuthService'
import {AuthContext} from '../Context/AuthContext'

const NavBar = props => {  
  

  const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);

  const onClickLogoutHandler = ()=>{
    AuthService.logout().then(data =>{
      if(data.success){
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  }

  const unAuthenticatedNavBar = () =>{
    return(
      <>
            {/* <Link to="/">
              <li className='nav-item nav-link'>
                Home
              </li>
            </Link> */}
            <a className='nav-link active' aria-current="page" href="/">Home</a>
            <a className='nav-link active' aria-current="page" href="/fileAdd">addfile</a>
            <a className='nav-link active' aria-current="page" href="/fileUploadHome">HomeFile</a>
            
            <a className="nav-link active" aria-current="page" href="/login">Login</a>

            <a className="nav-link active" aria-current="page" href="/register">Register</a>
         

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
    )
  }

  const AuthenticatedNavBar = () =>{
    return(
      <>
      <a className='nav-link active' aria-current="page" href="/fileAdd">addfile</a>
            <a className='nav-link active' aria-current="page" href="/fileUploadHome">HomeFile</a>
          <Link to="/">
            <li className='nav-item nav-link'>
              Home
            </li>
          </Link>       

          <Link to="/todos">
            <li className='nav-item nav-link'>
              Todos
            </li>
          </Link>
          {
            user.role === "admin" ?
              <Link to="/admin">
                <li className='nav-item nav-link'>
                  Admin
                </li>
            </Link> : null        
          }
        <button type='button' 
        className='btn btn-link nav-item nav-link' 
        onClick={onClickLogoutHandler}>Logout</button>

      </>
    )
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/">
      <div className="navbar-brand">Research</div>
    </Link>  
   
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto ">
        {!isAuthenticated ?  unAuthenticatedNavBar() : AuthenticatedNavBar()}
      </ul>
    
    </div>
  </div>
</nav> 

    </div>
  )
}

export default NavBar;