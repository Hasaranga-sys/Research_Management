// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function UpdateStudent(props) {

//     const [username, setIdNo] = useState("");
//   const [name, setNmae] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobileNo, setMobileNo] = useState();
//   const history = useNavigate();

//   const clickSubmit = (e) => {
//     e.preventDefault();

//     const submitData = { username, name, email, mobileNo };

//     console.log(submitData);

//     AuthService.register(user).then((res) => {
//       console.log(res);

//       StudentService.addStudent(submitData).then((res) => {
//         console.log(res);
//         history("/login");
//       });
//     });
//   };

//   return (
//     <div>UpdateStudent</div>
//   )
// }

// export default UpdateStudent
