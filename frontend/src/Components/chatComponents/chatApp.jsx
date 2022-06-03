import React, { useState, useEffect } from "react";
// import chatservice from "../Sevices/chatservice.js";
import chatservice from "../../Services/chatservice.js"
import { useParams } from 'react-router';
// import Attendees from "./attendees.js";
import Attendees from "./attendees.js";
// import "../chat.css";

function ChatApp(){
    const [chatlist, setchatlist] = useState([]);
    const {username} = useParams();
    const [message,  settextMessage] = useState("");

    useEffect(()=>{
        chatservice.getAllchats().then(
            response =>{
                setchatlist(response.data.chat);
                // console.log(chatlist);
            }
    )},[])

    const submitChat =(e) =>{
        e.preventDefault();
        const newchat = {
            username,
            message
        }
        chatservice.addchat(newchat);
    };
    return(
        <div>
            <div className="newroot">
            <div className="attendapp">
            <div className="attended-list">
        {/* <div>hello</div> */}
        <h1>chat list</h1>
        {chatlist.map((user) => (
          <Attendees chatter={user} />
        ))}
        
        {/* <ul>
      {chatlist.map((person, i) => {
        return   <h5 key={i}>{`${person.username} | ${person.message}`} </h5>;
        // return  <> <h5 key={i}>{`${person.username} : `} </h5><h3 key={i}>{`  ${person.message}`} </h3></>;
      })}
    </ul> */}
        {/* <table>
            <tbody>
            {
                chatlist.map(
                    chatlist => (
                        <tr key = {chatlist._id}>
                            <td>
                                <h5>{chatlist.username}</h5>
                                <h3>{chatlist.message}</h3>
                            </td>
                        </tr>
                    )
                )
            }
            <tr>
            
            </tr>
            </tbody>
        </table> */}
        <form onSubmit={submitChat}>
            <input name ='message' type ='text' placeholder = 'enter message' onChange={(e) => {settextMessage(e.target.value)}}>

            </input>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </form>
            </div></div></div>
        </div>
    )
}
export default ChatApp;