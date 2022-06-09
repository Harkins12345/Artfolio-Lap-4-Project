import React, { useState } from "react";

// this is the chat balloon of received messages

const ChatBalloonReceived = ({messageData}) => {
    
    function covertDate(){
        const date = new Date(messageData['timestamp'])
        return date.toLocaleString()
     }

    return (
        <>
            <div className="chat-balloon-received-main">
                <div className="chat-balloon-received-text-box">
                    <span className="chat-baloon-received-message">
                    {messageData['msg']}
                    </span>
                </div>
                <div className="chat-baloon-received-time">
                    <span className="chat-baloon-time">
                        {covertDate()}
                    </span>
                </div>
            </div>
        </>
    )
}

export default ChatBalloonReceived;