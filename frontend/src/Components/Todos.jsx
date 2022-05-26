import React, { useContext,useState,useEffect } from 'react'

import {AuthContext} from '../Context/AuthContext';
import TodoService from '../Services/TodoService';
import TodoItem from './TodoItem';
import Message from './Message';

const Todos = () => {
    const [todo, setTodo] = useState({name : ""});
    const[todos, setTodos] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        TodoService.getTodos().then(data =>{
            setTodos(data.todos);
            console.log(todos)
        })      
    }, [])

    const onSubmit = e =>{
        e.preventDefault();
        TodoService.postTodo(todo).then(data =>{
            const {message} = data;
            resetForm();
            //if we succesfully created a todo
            if(!message.msgError){
                TodoService.getTodos().then(getData =>{
                    setTodos(getData.todos);
                    setMessage(message);
                });
            }
            //if jwt expires
            else if(message.msgBody === "UnAutherized"){
                setMessage(message);
                authContext.setUser({username : "" , role : ""});
                authContext.setIsAuthenticated(false);
            }
            else{
                //err if client is trying to send empty string
                setMessage(message);
            }
        })
    }

    const onChange = e =>{
        setTodo({name : e.target.value})
    }

    const resetForm = ()=>{
        setTodo({name : ""});
    }
    

  return (
    <div>
        <ul className='list-group'>
            {
                todos.map(todo =>{
                    return<TodoItem key={todo._id} todo={todo}/>
                })
            }
        </ul>
        <br/>
        <form onSubmit={onSubmit}>
            <label htmlFor='todo'>Enter Todo</label>
            <input type="text" name="todo" value={todo.name} onChange={onChange} className="form-control" />      
            <button className='btn btn-lg btn-primary btn block' type="submit">Submit</button>      
        </form>
        {message ? <Message message={message}/> : null}
    </div>
  )
}

export default Todos