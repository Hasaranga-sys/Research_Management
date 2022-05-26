import axios from 'axios'

const URL = "/ading/todo"


export default{    postTodo : todo=>{
        return fetch(URL,{
            method : "post",
            body : JSON.stringify(todo),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(response=>{
            if(response.status !==401){
                return response.json().then(data => data);
            }else
                return {message : {msgBody : "unAutherized"} ,msgError : true}
        })
    

}}
