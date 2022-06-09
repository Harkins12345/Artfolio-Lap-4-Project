import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSocket } from "../../actions";
import io from "socket.io-client";
import Dropdown from "react-bootstrap/Dropdown";
import { ChatModal } from "../../components";
import axios from "axios";

const AcceptedRequest = ({gigData, refresh}) => {

  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <span className="threedots" />
    </a>
  ));

  // open modal operators
  const [showModal, setShowModal] = useState(false);

  function handleDelete(e){
    const data = {
      request_type: 'delete_request',
      request_data: gigData
    }

    axios.post('/request', data)
    .catch(err => console.log(err))

    refresh()
  }

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    if (showModal){
      const socket = io()
      socket.on('connect', () => {
        socket.emit('openChat', gigData['request_id'])
        dispatch(setSocket(socket))
      })
    }  else {
      dispatch(setSocket(null))
    }
  }, [showModal]);

  return (
    <div className="accepted-container my-4" data-testid="username">
      <div className="row name-dropdown" data-testid="username">
        <div className="col-6">
          <h3>
            {" "}
            {gigData["from_username"].toLowerCase() === username.toLowerCase()
              ? gigData["to_username"]
              : gigData["from_username"]}{" "}
          </h3>
        </div>
        <div className="col-6 drop-down-tg" data-testid="dropdown">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} />
            <Dropdown.Menu size="sm" title="">
              <Dropdown.Item onClick={handleDelete} >Delete</Dropdown.Item>
              <Dropdown.Item>Report</Dropdown.Item>
              <Dropdown.Item>Block</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="gigs-desc-chat">
            <p className="requests-desc">{gigData["description"]}</p>
            <button className="edit-button" onClick={openModal}>
              <i className="fa-solid fa-message"></i> Chat
            </button>
          </div>
        </div>
        <div className="col-4" data-testid="request-details">
          <div className="request-details">
            <span> Location: {gigData["location"]} </span>
            <span> Date/Time: {gigData["date"]} </span>
            <span> Duration: {gigData["duration"]} </span>
            <span> Genre: {gigData["genre"]} </span>
            <span> Budget: {gigData["budget"]} </span>
          </div>
        </div>
      </div>
      <ChatModal
        showModal={showModal}
        setShowModal={setShowModal}
        chatData={gigData}
      />
    </div>
  );
};

export default AcceptedRequest;
