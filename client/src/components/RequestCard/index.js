import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

const RequestCard = ({ requestData, refreshRequests }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleAccept(e) {
    const data = {
      request_type: "accept_request",
      request_data: requestData,
    };

    axios.post("/request", data).catch((err) => console.log(err));

    refreshRequests(e);
    handleClose();
  }

  function handleDenie(e) {
    const data = {
      request_type: "denie_request",
      request_data: requestData,
    };

    axios.post("/request", data).catch((err) => console.log(err));

    refreshRequests(e);
    handleClose();
  }

  return (
    <div className="pending-request-item">
      <div className="pending-request-content">
        <h3 className="pending-request-title">
          {requestData["from_username"]}
        </h3>
        <p className="pending-request-description">
          {requestData["description"]}
        </p>

        <div className="col d-flex align-items-end justify-content-end">
          <div onClick={handleShow} className="pending-request-view-more-link">
            View more
          </div>

          {/* MODAL ADDITION  */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>{requestData["from_username"]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Description</th>
                    <td>{requestData["description"]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Location</th>
                    <td>{requestData["location"]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Date/Time</th>
                    <td>{requestData["date"]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Duration</th>
                    <td>{requestData["duration"]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Genre</th>
                    <td>{requestData["genre"]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Budget</th>
                    <td>{requestData["budget"]}</td>
                  </tr>
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleAccept}>
                ACCEPT REQUEST
              </Button>
              <Button variant="secondary" onClick={handleDenie}>
                DECLINE REQUEST
              </Button>
            </Modal.Footer>
          </Modal>

          {/* MODAL ENDS */}
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
