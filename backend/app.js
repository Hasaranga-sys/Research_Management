const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const router2 = require("./routes/ResearchRoute");
const router3 = require("./routes/StudentGroupRoutes");

//pdf
const dotenv = require("dotenv");
// const fileupload = require("express-fileupload");

dotenv.config();

app.use(cookieParser());
app.use(express.json());

app.use(cors());

//file upload
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use("/upload", require("./routes/FileUploadRoutes"));

//database password - 6qb48qJBagUji7gg

//udula DB

// mongoose.connect(
//   "mongodb+srv://udula:udula123@cluster0.ovykurx.mongodb.net/ResearchTool?retryWrites=true&w=majority",
//   () => {
//     console.log("succeessfully connected to the database");
//   }
// );

  //my DB don't delete
// mongoose.connect(
//   "mongodb+srv://admin:6qb48qJBagUji7gg@cluster0.gt2iz.mongodb.net/ResearchTool?retryWrites=true&w=majority",
//   () => {
//     console.log("succeessfully connected to the database");
   
//   }
// );

mongoose.connect(
  "mongodb+srv://admin:6qb48qJBagUji7gg@cluster0.gt2iz.mongodb.net/ResearchTool?retryWrites=true&w=majority",{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  
  }).then(()=>{console.log("MongoDB connected successfully")
}).catch((err)=> console.log("DB conncetion failed".err))
 



//pdf
app.use(cors());
app.use("/pdf", require("./routes/pdf"));

const userRouter = require('./routes/User');
app.use('/user',userRouter)


//token natuwa crud
app.use(cors());
const todoRouter = require("./routes/TodoRoute");
app.use("/ading", todoRouter);

//udula-student
app.use(cors());
const studentRouter = require("./routes/StudentRoute");
app.use("/student", studentRouter);

//lahiru-staffMember
app.use(cors());
const staffMemberRouter = require("./routes/staffMemberRoute");
app.use("/staffMember", staffMemberRouter);



app.use(cors());
app.use("/researchtopics", router2);
app.use("/studentGroup", router3);

app.listen(5000, () => {
  console.log("server started");
  console.log("App is Running on port 5000")
});
