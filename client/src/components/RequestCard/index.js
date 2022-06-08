import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ArtistCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="gallery-item-artist">
      <div className="gallery-content">
        <h3 className="gallery-item-title">Anniversary Party</h3>
        <p className="gallery-item-description">
          I love your work, and would like to book you for an upcoming
          anniversary. I look forward to your response.{" "}
        </p>

        <div className="col d-flex align-items-end justify-content-end">
          <div onClick={handleShow} className="gallery-item-view-more-link">
            View more
          </div>

          {/* MODAL ADDITION  */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>NAME</td>
                  </tr>
                  <tr>
                    <th scope="row">Description</th>
                    <td>DESCRIPTION</td>
                  </tr>
                  <tr>
                    <th scope="row">Location</th>
                    <td>LOCATION</td>
                  </tr>
                  <tr>
                    <th scope="row">Date/Time</th>
                    <td>DATE/TIME</td>
                  </tr>
                  <tr>
                    <th scope="row">Duration</th>
                    <td>DURATION</td>
                  </tr>
                  <tr>
                    <th scope="row">Genre</th>
                    <td>GENRE</td>
                  </tr>
                  <tr>
                    <th scope="row">Budget</th>
                    <td>BUDGET</td>
                  </tr>
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                ACCEPT REQUEST
              </Button>
              <Button variant="secondary" onClick={handleClose}>
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

export default ArtistCard;
