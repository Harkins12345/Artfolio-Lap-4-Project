import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatBalloonReceived from "../ChatBalloonReceived";
import ChatBalloonSend from "../ChatBalloonSend";


const ChatModal = ({ showModal, setShowModal, chatData }) => {

    const username = useSelector(state => state.username)
    const socket = useSelector(state => state.socket)

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState();

    if (socket) {
        socket.on('prevMessages', (msgs) => setMessages([...msgs]))
    }

    function handleMessage(e) {
        setMessage(e.target.value)
    }

    function handleCloseModal(e){
        setShowModal(false)
    }

    function sendMessage(e) {
        e.preventDefault()
        if (socket) {
            socket.emit('sendMessage', message, chatData['request_id'])
        }

        setMessage('')
    }

    return (
        <>
            {/* show modal if value is true */}
            {showModal ? (
                <div className="chat-modal-box ">
                    <div className="chat-modal-section-top">
                        <div className="chat-modal-top-close">
                            <div className="chat-modal-close" onClick={handleCloseModal}>
                                <i className="bi bi-x-square-fill" id="closeChat"></i>
                            </div>
                        </div>
                    </div>
                    <div className="chat-modal-section-middle">
                        <div className="chat-modal-chat-box">
                            <p className="chat-modal-initialization">conversation started</p>
                            {messages.map(msgData => {
                                if (msgData['user'] === username) {
                                    return <ChatBalloonSend messageData={msgData} />
                                } else {
                                    return <ChatBalloonReceived messageData={msgData} />
                                }
                            })}
                        </div>
                    </div>
                    <div className="chat-modal-section-bottom">
                        <form onSubmit={sendMessage} id="chat-modal-box">
                            <div className="chat-modal-text-area">
                                <textarea onChange={handleMessage} value={message} className="form-control" id="chat-box-message"></textarea>
                            </div>
                            <div className="chat-modal-send-icon-box">
                                <button type="submit" className="chat-modal-send-button">
                                    <i className="bi bi-send-fill"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default ChatModal;
