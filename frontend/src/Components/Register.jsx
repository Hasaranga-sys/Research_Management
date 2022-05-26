import React, { useState, useRef , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthService from '../Services/AuthService'
import Message from './Message'

const Register = (props) => {
    const [user, setUser] = useState({username : "", password : "" , role : ""});
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);
    const history = useNavigate()


   

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);

    const signUp = (e) =>{
        //onChange            
        setUser({...user,[e.target.name] : e.target.value});
        console.log(user);
    }

    const resetForm = () =>{
        setUser({username : "", password: "", role: ""});
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        AuthService.register(user).then(data=>{
            console.log(data);
            const {message} = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    history('/login');
                },20)
            }
        })

    }


  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            <h2>Register</h2>
            <label htmlFor='username' className='sr-only'>Username</label>
            <input type='text'
                   name='username'
                   value={user.username}
                   onChange={signUp}
                   className='form-control'
                   placeholder='Enter username' />

            <label htmlFor='role' className='sr-only'>Role</label>
            <input type='text' 
                   name='role'
                   value={user.role} 
                   onChange={signUp}
                   className='form-control' 
                   placeholder='Enter Role' />

            <label htmlFor='password' className='sr-only'>Password</label>
            <input type='text' 
                   name='password'
                   value={user.password} 
                   onChange={signUp}
                   className='form-control' 
                   placeholder='Enter Password' />

            <button className='btn btn-lg btn-primary btn-block' type='submit'>Register</button>
        </form>
        {message ? <Message message={message}/> : null}
    </div>
  )
}

export default Register