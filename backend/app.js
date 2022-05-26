const express = require('express');
const app = express();
const cors = require('cors');

const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const router2 = require("./routes/ResearchRoute");



app.use(cookieParser());
app.use(express.json());

//database password - 6qb48qJBagUji7gg

mongoose.connect("mongodb+srv://admin:6qb48qJBagUji7gg@cluster0.gt2iz.mongodb.net/ResearchTool?retryWrites=true&w=majority", ()=>{
    console.log('succeessfully connected to the database');
});

// const User = require('./models/User');

// const userInput ={
//     username : "hasa999",
//     password : "12345",
//     role : "admin"
// }

// const user = new User(userInput);
// user.save((err,document)=>{
//     if(err){
//         console.log(err);
//     }else
//         console.log(document);

// });

const userRouter = require('./routes/User');
app.use('/user',userRouter)

//token natuwa crud
app.use(cors());
const todoRouter = require('./routes/TodoRoute');
app.use('/ading',todoRouter)

app.use(cors());
app.use("/researchtopics",router2)


app.listen(5000,()=>{
    console.log('server started');
})

