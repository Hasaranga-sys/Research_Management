import React, { useState, useEffect } from "react";
import chatservice from "../../Services/chatservice.js"
import { useParams } from 'react-router';
import Attendees from "./attendees.js";
import { useNavigate } from "react-router-dom";


function ChatApp(){
    const [chatlist, setchatlist] = useState([]);
    const {username} = useParams();
    const [message,  settextMessage] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        chatservice.getAllchats().then(
            response =>{
                setchatlist(response.data.chat);
            }
    )},[])
    
    function refresh () {
        chatservice.getAllchats().then(
            response =>{
                setchatlist(response.data.chat);
            }
        )
    }

    const submitChat =(e) =>{
        e.preventDefault();
        const newchat = {
            username,
            message
        }
        chatservice.addchat(newchat).then(
            refresh()
        );
    };
    return(
        <div>
            <div className="newroot">
            <div className="attendapp">
            <div className="attended-list">
        <h1>chat list</h1>
        {chatlist.map((user) => (
          <Attendees chatter={user} />
        ))}
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