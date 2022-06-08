import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import AcceptedRequest from "../../components/AcceptedRequest";

const DashboardPage = () => {
  const navigate = useNavigate();

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
                <div className="profile-nav-info">
                  <h3 className="user-name">USERNAME</h3>
                  <div className="projectStatus">
                    <p className="item-status">
                      <span className="status-number">2</span>
                      <span className="status-type">Pending Requests</span>
                    </p>
                    <p className="item-status">
                      <span className="status-number">7</span>
                      <span className="status-type">Attending Gigs</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 portfolio-button">
              <button
                onClick={() => navigate("/portfolio")}
                className="profile-option"
              >
                Edit{" "}
                <i className="fa-solid fa-pencil" data-testid="edit-btn"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PENDING REQUESTS */}
      <div className="container-xl dashboard-main">
        <div className="pending-container">
          <h2> Pending Requests</h2>
          <button className="pending-requests">Check Requests</button>
        </div>
        {/* ACCEPTED GIGS */}
        <h2 className="mt-4"> Accepted Requests </h2>
        <AcceptedRequest/>
      </div>
    </>
  );
};

export default DashboardPage;
