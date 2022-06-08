import React from "react";

const ChatModal = () => {

    // function to close the chat

    // function to minimize the chat

    return (
        <>
            {/* show modal if value is true */}
            {/* {showModal? ( */}
                <div className="chat-modal-box ">
                    <div className="chat-modal-section-top">
                        <div className="chat-modal-top-close">
                            <i className="bi bi-arrows-angle-contract"></i>
                            <i className="bi bi-x-square-fill"></i>
                        </div>
                    </div>
                    <div className="chat-modal-section-middle">
                        <div className="chat-modal-chat-box">
                            hello, this is the chat box for another component
                        </div>
                    </div>
                    <div className="chat-modal-section-bottom">
                        <form id="chat-modal-box">
                            <div className="chat-modal-text-area">
                                <textarea className="form-control" id="chat-box-message"></textarea>
                            </div>
                            <div className="chat-modal-send-icon">
                                <button type="submit" className="chat-modal-send-button">
                                    <i className="bi bi-send-fill"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            {/* ) : null} */}
        </>
    )
}

export default ChatModal;