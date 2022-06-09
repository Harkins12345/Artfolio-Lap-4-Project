import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import {
  FooterCTA,
  ArtistAudio,
  ArtistReview,
  ArtistMedia,
} from "../../components";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ArtistPortfolioPage = () => {
  const username = useSelector(state => state.username);
  const navigate = useNavigate();
  const [artistData, setArtistData] = useState();

  const [eventDate, setEventDate] = useState("N/a");
  const [eventLocation, setEventLocation] = useState("N/a");
  const [eventDuration, setEventDuration] = useState("N/a");
  const [eventGenre, setEventGenre] = useState("N/a");
  const [eventBudget, setEventBudget] = useState("N/a");
  const [eventDescription, setEventDescription] = useState("N/a");
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDate(e){
    setEventDate(e.target.value)
  }
  function handleLocation(e){
    setEventLocation(e.target.value)
  }

  function handleDuration(e){
    setEventDuration(e.target.value)
  }

  function handleGenre(e){
    setEventGenre(e.target.value)
  }

  function handleBudget(e){
    setEventBudget(e.target.value)
  }

  function handleDescription(e){
    setEventDescription(e.target.value)
  }

  function handleDisable(){
    if (!username || username === window.location.pathname.split("/")[2]){
      return true
    } else {
      return false
    }
  }


  function handleSubmit(e){
    e.preventDefault()

    const data = {
      request_type: "create_request",
      request_data: {
        date: eventDate,
        location: eventLocation,
        duration: eventDuration,
        genre: eventGenre,
        budget: eventBudget,
        description: eventDescription,
        to_username: `${window.location.pathname.split("/")[2]}`
      }
    }

    axios.post('/request', data)
    .catch(err => console.log(err))

    navigate('/artists')
  }

  // get the artists api (with a placeholder)
  useEffect(() => {
    axios
      .post(
        `${window.origin}/artists/${window.location.pathname.split("/")[2]}`
      )
      .then((resp) => resp.data)
      .then((data) => setArtistData(data))
      .catch((err) => navigate("/artists"));
  }, []);

  return (
    <>
      <section id="artist-intro-section" data-testid="artist-intro-section">
        <div className="container-xl pt-4">
          <div className="row">
            <span
              className="back-to-all-artists"
              data-testid="back-to-all-artists"
              onClick={() => navigate("/artists")}
            >
              <i className="bi bi-arrow-left"></i>&nbsp; Back to all artists
            </span>
          </div>

          <div className="row pt-5 pb-3">
            <div className="col-8">
              <h1 className="artist-name" data-testid="artist-name">
                {artistData ? artistData["portfolio"]["name"] : "Loading"}
              </h1>
              <h2 className="artist-genre" data-testid="artist-genre">
                {artistData ? artistData["portfolio"]["genre"] : "Loading"}
              </h2>

              <h3 className="artist-price" data-testid="artist-price">
                £{artistData ? artistData["portfolio"]["price"] : "Loading"}
              </h3>
              <div className="artist-stars" data-testid="artist-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className="col-4">
              <div className="artist-image-availability d-flex justify-content-end me-2">
                <span className="artist-image" data-testid="artist-image">
                  <i className="artist-icon bi bi-person-fill"></i>
                </span>
                <div className="artist-availability">Available</div>
              </div>
            </div>
          </div>
          <div className="artist-intro" data-testid="artist-intro">
            {artistData ? artistData["portfolio"]["description"] : "Loading"}
          </div>
          <div className="artist-btn-container">
            <Button
              variant="primary"
              onClick={handleShow}
              className="btn primary-cta-btn"
              disabled={handleDisable()}
            >
              {username ? "Get in touch" : "Please login/sign up"}
            </Button>

            {/* MODAL ADDITION  */}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Form id="requestForm" onSubmit={handleSubmit} >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Date/Time</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      placeholder="name@example.com"
                      value={eventDate}
                      onChange={handleDate}
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="textarea" rows={1} value={eventLocation} onChange={handleLocation} />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Duration</Form.Label>
                    <Form.Control as="textarea" rows={1} value={eventDuration} onChange={handleDuration} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Genre</Form.Label>
                    <Form.Control as="textarea" rows={1} value={eventGenre} onChange={handleGenre} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Budget</Form.Label>
                    <Form.Control as="textarea" rows={1} value={eventBudget} onChange={handleBudget} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={eventDescription} onChange={handleDescription} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" form="requestForm" variant="primary">
                  SUBMIT REQUEST
                </Button>
              </Modal.Footer>
            </Modal>

            {/* MODAL ENDS */}
          </div>
        </div>
      </section>
      <section id="artist-media">
        <div className="container-xl pt-4">
          <h2 className="artist-media-title">Check out some of my work</h2>
          <div className="row">
            <div className="col">
              <ul className="gallery-list has-scrollbar mb-2">
                {artistData
                  ? artistData["portfolio"]["media"]
                      .filter(
                        (media) =>
                          media["contentType"].split("/")[0] !== "audio"
                      )
                      .map((media) => <ArtistMedia media={media} />)
                  : null}
              </ul>
            </div>
          </div>
          {artistData
            ? artistData["portfolio"]["media"]
                .filter(
                  (media) => media["contentType"].split("/")[0] === "audio"
                )
                .map((media, index) => (
                  <ArtistAudio media={media} player={index} />
                ))
            : null}
        </div>
      </section>
      <section id="artist-reviews">
        <div className="artist-review-section">
          <div className="container-xl">
            <h2 className="artist-review-title">My Reviews</h2>
            <div className="artist-stars pb-3">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <div className="artist-stars-average">Average - 4.5/5</div>
            </div>
          </div>
        </div>

        <div className="container-xl">
          <ArtistReview />
          <ArtistReview />
        </div>
      </section>
      <FooterCTA />
    </>
  );
};

export default ArtistPortfolioPage;
