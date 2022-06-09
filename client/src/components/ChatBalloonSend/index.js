import React, { useState } from "react";

// this is the chat balloon of sent messages

const ChatBalloonSend = ({messageData}) => {

    function covertDate(){
       const date = new Date(messageData['timestamp'])
       return date.toLocaleString()
    }

    return (
        <>
            <div className="chat-balloon-send-main">
                <div className="chat-balloon-send-text-box">
                    <span className="chat-baloon-send-message">
                        {messageData['msg']}
                    </span>
                </div>
                <div className="chat-baloon-send-time">
                    <span className="chat-baloon-time">
                        {covertDate()}
                    </span>
                </div>
            </div>
        </>
    )
}

export default ChatBalloonSend;