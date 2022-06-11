import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AcceptedRequest from "../../components/AcceptedRequest";
import { RequestCard } from "../../components";

const DashboardPage = () => {
  const navigate = useNavigate();

  const username = useSelector((state) => state.username);

  const [pendingRequests, setPendingRequests] = useState([]);
  const [activeGigs, setActiveGigs] = useState([]);
  const [artistMedia, setArtistMedia] = useState([]);
  const [hack, setHack] = useState(0);

  useEffect(() => {
    console.log(artistMedia)
  }, [artistMedia])

  // MODAL

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .post("/dashboard")
      .then((resp) => resp.data)
      .then((data) => {
        setPendingRequests(data["pending_requests"]);
        setActiveGigs(data["active_gigs"]);
        setArtistMedia(data["portfolio"]["media"]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(activeGigs)
    console.log(pendingRequests)
  }, [activeGigs, pendingRequests])

  function checkRequests(e) {

    axios
      .post("/dashboard/refresh")
      .then((resp) => {
        const data = resp.data
        console.log('Setting state...')
        setPendingRequests(prev => data["requests"])
        setActiveGigs(prev => data['active_gigs'])
        console.log(data)

      });
  }

  // INCOMMING PAGE FOR MODAL

  return (
    <>
      {/* HEADER */}
      <div className="dashboard-section" data-testid="welcome-section">
        <div className="container-xl pt-4">
          <div className="row">
            <div className="col-8">
              <div className="profile-header" data-testid="main-text">
                <div className="profile-img" data-testid="user-welcome">
                {artistMedia.length !== 0 && artistMedia
                      .find(media => media["contentType"].split("/")[0] === "image")
                  ? <img alt="Profile Picture" width={200} src={`/media/${artistMedia
                      .find(media => media["contentType"].split("/")[0] === "image")['filename']}`} />
                  : <i className="artist-icon bi bi-person-fill"></i>}
                </div>
                <div className="profile-nav-info" data-testid="artist-card">
                  <h3 className="user-name" data-testid="artist-card">
                    {username ? username : "Loading..."}
                  </h3>
                  <div className="projectStatus">
                    <p className="item-status">
                      <span className="status-number">
                        {pendingRequests.length}
                      </span>
                      <span className="status-type">Pending Requests</span>
                    </p>
                    <p className="item-status">
                      <span
                        className="status-number"
                        data-testid="attending-gig"
                      >
                        {activeGigs.length}
                      </span>
                      <span className="status-type" data-testid="attending-gig">
                        Attending requests
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 portfolio-button-container mb-3">
              <button
                onClick={() => navigate("/dashboard/edit")}
                className="btn portfolio-edit-btn"
                data-testid="portfolio-btn"
              >
                Edit{" "}
                <i className="fa-solid fa-pencil" data-testid="edit-btn"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PENDING REQUESTS */}

      <section className="pending-request-section" data-testid="gig-requests">
        <div className="container-xl">
          <h2 className="pending-request-title">Pending Requests</h2>
          <ul className="gallery-list has-scrollbar">

            {pendingRequests.length !== 0 ? pendingRequests.map(request => <RequestCard requestData={request} refreshRequests={checkRequests} />) : <></>}

          </ul>
        </div>
      </section>

      {/* The below was the original one - to be used for the request modal  */}

      {/* ACCEPTED GIGS */}

      <section className="accepted-request-section">
        <div className="container-xl">
          <h2
            className="mt-4 accepted-request-title"
            data-testid="gigs-accepted"
          >
            {" "}
            Accepted Requests{" "}
          </h2>
          {activeGigs.len !== 0 ? (
            activeGigs.map((gig) => (
              <AcceptedRequest gigData={gig} refresh={checkRequests} />
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
