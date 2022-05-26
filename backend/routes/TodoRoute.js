// const Todo=require('../models/Todo');
const express =require('express');
const todoRouter = express.Router();

const User = require('../models/User');
const Todo = require('../models/Todo');
const passport = require('passport');

const todoController = require('../controller/todoController');

//mee yata tiyena eka controller ekata damma


// todoRouter.post('/todo',passport.authenticate('jwt',{session : false}),(req,res)=>{
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

// no atuth eke route eka
todoRouter.post('/todo',todoController.addTodo);


module.exports = todoRouter;