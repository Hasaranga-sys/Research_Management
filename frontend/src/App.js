import logo from './logo.svg';
import './App.css';

import {Route, Routes } from 'react-router-dom';

import React, { useContext } from 'react'

import {AuthContext} from './Context/AuthContext';
import NavBar from './Components/NavBar';
import { Home } from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Todos from './Components/Todos';
import Admin from './Components/Admin';
import AuthProvider from './Context/AuthContext';
import TestTodo from './Components/TestTodo';
import ResearchTopicForm from './Components/ResearchTopicForm';
function App() {
  // const  { user,setUser,isAuthenticated,setIsAuthenticated} = useContext(AuthContext);
  // console.log(user);
  // console.log(isAuthenticated);
  return (

    <React.Fragment>
      <header>
      <NavBar/>
      </header>  
      <main>
      <Routes>
        
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/todos" component={TestTodo}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/researchTopic" component={ResearchTopicForm}/> */}

        <Route  path="/" element={<Home/>} exact/>
        <Route path="/login" element={<Login/>} exact/>
        <Route path="/register" element={<Register/>} exact />
        <Route path="/todos" element={<TestTodo/>} exact/>
        <Route path="/admin" element={<Admin/>} exact/>
        
        <Route path="/researchTopic" element={<ResearchTopicForm/>} exact/>
    </Routes>
    </main>   
    </React.Fragment>   
    
   
  );
}

export default App;
