import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AcceptedRequest from "../../components/AcceptedRequest";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { RequestCard } from "../../components";

const DashboardPage = () => {
  const navigate = useNavigate();

  const username = useSelector((state) => state.username);

  const [pendingRequests, setPendingRequests] = useState([]);
  const [activeGigs, setActiveGigs] = useState([]);

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
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(pendingRequests);
  }, [pendingRequests]);

  function checkRequests(e) {
    console.log('Refreshing...')
    axios
      .post("/dashboard/refresh")
      .then((resp) => resp.data)
      .then((data) => {
        setPendingRequests([...data["requests"]])
        setActiveGigs([...data['active_gigs']])
      });
  }

  // INCOMMING PAGE FOR MODAL

  return (
    <>
      {/* HEADER */}
      <div className="welcome-section" data-testid="welcome-section">
        <div className="container-xl">
          <div className="row">
            <div className="col-8">
              <div className="profile-header" data-testid="main-text">
                <div className="profile-img" data-testid="user-welcome">
                  <img
                    className="profile-pic"
                    src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    width="200"
                    alt="Profile Image"
                  />
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
                        Attending Gigs
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 portfolio-button">
              <button
                onClick={() => navigate("/dashboard/edit")}
                className="profile-option"
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
            {pendingRequests.len !== 0 ? pendingRequests.map(request => <RequestCard requestData={request} refreshRequests={checkRequests} />) : <></>}
          </ul>
        </div>
      </section>

      

      {/* The below was the original one - to be used for the request modal  */}

      {/* ACCEPTED GIGS */}

      <section className="accepted-request-section">
        <div className="container-xl">
          <h2 className="mt-4" data-testid="gigs-accepted">
            {" "}
            Accepted Requests{" "}
          </h2>
          {activeGigs.len !== 0 ? activeGigs.map(gig => <AcceptedRequest gigData={gig} refresh={checkRequests} />) : <></>}
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
