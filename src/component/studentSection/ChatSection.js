import React from 'react'
import "./ChatSection.css"

function ChatSection({onlineUser, onlineUser_image}) {
    return (
        <div className="chat_section">
           <div className="online_icon"></div> 
           <img src={onlineUser_image} />
           <p> {onlineUser} </p>
        </div>
    )
}

export default ChatSection
