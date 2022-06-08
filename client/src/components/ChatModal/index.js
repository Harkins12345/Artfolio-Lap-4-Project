import React from "react";
import ChatBalloonReceived from "../ChatBalloonReceived";
import ChatBalloonSend from "../ChatBalloonSend";


const ChatModal = ({ showModal, setShowModal }) => {

    // function to minimize the chat

    return (
        <>
            {/* show modal if value is true */}
            {showModal? (
                <div className="chat-modal-box ">
                    <div className="chat-modal-section-top">
                        <div className="chat-modal-top-close">
                            <div className="chat-modal-collapse">
                                <i className="bi bi-arrows-angle-contract" id="minimizeChat"></i>
                            </div>
                            <div className="chat-modal-close">
                                <i className="bi bi-x-square-fill" id="closeChat"></i>
                            </div>
                        </div>
                    </div>
                    <div className="chat-modal-section-middle">
                        <div className="chat-modal-chat-box">
                            <p className="chat-modal-initialization">conversation started</p>
                            <ChatBalloonSend />
                            <ChatBalloonReceived />
                            <ChatBalloonSend />
                            <ChatBalloonReceived />
                            <ChatBalloonSend />
                            <ChatBalloonReceived />
                        </div>
                    </div>
                    <div className="chat-modal-section-bottom">
                        <form id="chat-modal-box">
                            <div className="chat-modal-text-area">
                                <textarea className="form-control" id="chat-box-message"></textarea>
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
