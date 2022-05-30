const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const router2 = require("./routes/ResearchRoute");
const router3 = require("./routes/StudentGroupRoutes");

//pdf
const dotenv = require("dotenv");
const fileupload = require("express-fileupload");

dotenv.config();

app.use(cookieParser());
app.use(express.json());

//database password - 6qb48qJBagUji7gg

// mongoose.connect(
//   "mongodb+srv://udula:udula123@cluster0.ovykurx.mongodb.net/ResearchTool?retryWrites=true&w=majority",
//   () => {
//     console.log("succeessfully connected to the database");
//   }
// );

mongoose.connect("mongodb+srv://admin:6qb48qJBagUji7gg@cluster0.gt2iz.mongodb.net/ResearchTool?retryWrites=true&w=majority", ()=>{
    console.log('succeessfully connected to the database');
});

//pdf
app.use(cors());
app.use("/user", require("./routes/pdf"));

const userRouter = require('./routes/User');
app.use('/user',userRouter)
app.use('/view',userRouter)

// const userVRouter = require('./routes/User');
// app.use('/view',userVRouter)

//token natuwa crud
app.use(cors());
const todoRouter = require("./routes/TodoRoute");
app.use("/ading", todoRouter);

app.use(cors());
app.use("/researchtopics", router2);
app.use("/studentGroup", router3);

app.listen(5000, () => {
  console.log("server started");
});
