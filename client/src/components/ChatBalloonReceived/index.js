import React, { useState } from "react";

// this is the chat balloon of received messages

const ChatBalloonReceived = () => {
    
    const [receivedText, setReceivedText] = useState();
    const [receivedTime, setReceivedTime] = useState();

    return (
        <>
            <div className="chat-balloon-received-main">
                <div className="chat-balloon-received-text-box">
                    <span className="chat-baloon-received-message">
                        Text can break a singlelongwordtothebeginningwithoutoverflowing
                        {receivedText}
                    </span>
                </div>
                <div className="chat-baloon-received-time">
                    <span className="chat-baloon-time">
                        12:30am
                        {receivedTime}
                    </span>
                </div>
            </div>
        </>
    )
}

export default ChatBalloonReceived;