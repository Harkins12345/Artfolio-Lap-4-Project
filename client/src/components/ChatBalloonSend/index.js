import React, { useState } from "react";

// this is the chat balloon of sent messages

const ChatBalloonSend = () => {
    
    const [sentText, setSentText] = useState();
    const [sentTime, setSentTime] = useState();

    return (
        <>
            <div className="chat-balloon-send-main">
                <div className="chat-balloon-send-text-box">
                    <span className="chat-baloon-send-message">
                        Text can break a singlelongwordtothebeginningwithoutoverflowing
                        {sentText}
                    </span>
                </div>
                <div className="chat-baloon-send-time">
                    <span className="chat-baloon-time">
                        12:30am
                        {sentTime}
                    </span>
                </div>
            </div>
        </>
    )
}

export default ChatBalloonSend;