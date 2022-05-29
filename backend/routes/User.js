const express =require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const User = require('../models/User');
const Todo = require('../models/Todo');
const JWT = require('jsonwebtoken');

const signToken = userID =>{
    return JWT.sign({
        iss : "hasa",
        sub : userID
    },"hasa",{expiresIn : "1 day"});
}

// part4 5:15
//register a new user
userRouter.post('/register',(req,res)=>{
    const {username,password,role} = req.body;
    User.findOne({username},(err,user)=>{
        if(err)
            res.status(500).json({message:{msgBody :"Err occured", msgErr:true}});
            if(user) //if there is aleady a user in this name
                res.status(400).json({message:{msgBody :"Username is alrady taken", msgErr:true}});
                    else{
                        //if no err so we can create a user
                        const newUser = new User({username,password,role});
                        newUser.save(err=>{
                            if(err)
                                res.status(500).json({message:{msgBody :"Err occured", msgErr:true}});
                                else{
                                    res.status(201).json({message:{msgBody :"Account created succesfully", msgErr:false}});
                                }
                        })
                    }
    })

})

//login route
userRouter.post('/login',passport.authenticate('local',{session : false}),(req,res)=>{
    if(req.isAuthenticated()){
    const {_id,username,role} = req.user; // we successfully sign in
    const token = signToken(_id);  //creating jwt token
    res.cookie('access_token',token,{httpOnly:true, sameSite:true}); 
    res.status(200).json({isAuthenticated : true,user :{username,role}});                                    
}
})

//logout route
userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{username : "" , role :""}, success : true});                               

});
// add
userRouter.post('/todo',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const todo = new Todo(req.body);
    todo.save(err=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError:true}});
            else{
                req.user.todos.push(todo);
                req.user.save(err=>{
                    if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError:true}})
                    else
                    res.status(200).json({message : {msgBody : "success", msgError:false}})
                })
            }
    })
})

//get todo
userRouter.get('/todos',passport.authenticate('jwt',{session : false}),(req,res)=>{
    User.findById({_id : req.user._id}).populate('todos').exec((err,document)=>{
        if(err)
        res.status(500).json({message : {msgBody : "Error has occured", msgError:true}})
        else{
            res.status(200).json({todos : document.todos, authenticated :true});
        }
    })
})
//meka karanne
//admin auth
userRouter.get('/admin',passport.authenticate('jwt',{session : false}),(req,res)=>{
    if(req.user.role === 'admin'){
        res.status(200).json({message : {msgBody : 'You are an admin' , msgError : false}});
    }else{
        res.status(403).json({message : {msgBody : "youre a=not an admin", msgError : true}});
    }
})

//user auth meken karanne back end and front end eks sync karanwa basically browser eka close kalata logourt wenne na
userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {username,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,role}})
})


module.exports = userRouter; 