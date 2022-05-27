import React, { useContext, useState } from 'react'
import AuthService from '../Services/AuthService'
import { AuthContext } from '../Context/AuthContext'
import Message from './Message'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    // const {isAuthenticated,userl,setIsAuthenticated,setUserl} = useContext(AuthContext);

    const [user, setUser] = useState({username:"",password:""});
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    const history = useNavigate()

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
                    history('/admin');}
                    else if(user.role === "user"){
                    history('/studentHome');}
            }else{
                setMessage(message);
            }
        })

    }


  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <label htmlFor='username' className='sr-only'>Username</label>
            <input type='text' name='username' onChange={signIn}
                     className='form-control' placeholder='Enter username' />

            <label htmlFor='password' className='sr-only'>Password</label>
            <input type='text' name='password' onChange={signIn}
                    className='form-control' placeholder='Enter Password' />

            <button className='btn btn-lg btn-primary btn-block' type='submit'>Login</button>
        </form>
        {message ? <Message message={message}/> : null}
    </div>
  )
}

export default Login