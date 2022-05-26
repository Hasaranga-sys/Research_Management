const Todo = require('../models/Todo');

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

exports.addTodo = addTodo;