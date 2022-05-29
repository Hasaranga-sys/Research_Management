const Todo = require('../models/Todo');

const express =require('express');
const User = require('../models/User');
const AddtodoRouter = express.Router();
const JWT = require('jsonwebtoken');
const passport = require('passport');

const addTodo = async(req,res,next)=>{
    const {name} =req.body;
    let todos;
    try{
        todos = new Todo({
            name
        });
        await todos.save();
    }catch(err){
        console.log(err);
    }
    if(!todos){
        return res.status(500).json({message:"unable to add"})
    }
    return res.status(201).json({todos});
    
}

// AddtodoRouter.post('/todo',passport.authenticate('jwt',{session : false}),(req,res)=>{
//     const todo = new Todo(req.body);
//     todo.save(err=>{
//         if(err)
//             res.status(500).json({message : {msgBody : "Error has occured", msgError:true}});
//             else{
//                 req.user.todos.push(todo);
//                 req.user.save(err=>{
//                     if(err)
//                     res.status(500).json({message : {msgBody : "Error has occured", msgError:true}})
//                     else
//                     res.status(200).json({message : {msgBody : "success", msgError:false}})
//                 })
//             }
//     })
// })

// module.exports=AddtodoRouter;

exports.addTodo = addTodo;
// exports.createTodo=createTodo;