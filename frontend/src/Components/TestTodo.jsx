import React,{useState, useEffect} from 'react';
import NoTodoServ from '../Services/NoTodoServ';

const TestTodo = () => {
    const [todos, setTodos] = useState('')

    const saveTodo = (e) =>{
        e.preventDefault();
        const legalTodo = {todos}
        NoTodoServ.postTodo(legalTodo).then(response=>{
        console.log(response.data);
        })
    }
    
  return (
    <div className='container'>
        <form onSubmit={e =>{saveTodo(e)}}>
        <label>Todo</label>
        <input name='todos' type='text' onChange={(e) => {setTodos(e.target.value)}}  required ></input>
        <br></br>
        <input className='submitButton' type='submit' value='submit'></input>



        </form>
    </div>
  )
}

export default TestTodo