import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="welcome-section" data-testid="welcome-section">
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
              <p className="item-status" data-testid="attending-gig">
                <span className="status-number" data-testid="attending-gig">
                  5
                </span>
                <span className="status-type" data-testid="attending-gig">
                  Gig Requests
                </span>
              </p>
              <p className="item-status">
                <span className="status-number" data-testid="upcoming-gigs">
                  7
                </span>
                <span className="status-type" data-testid="upcoming-gigs">
                  Upcoming Gigs
                </span>
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/portfolio")}
          className="profile-option"
        >
          Edit <i className="fa-solid fa-pencil" data-testid="edit-btn"></i>
        </button>
      </div>

      <div className="dashboard-container">
        <div className="request-gigs" data-testid="gig-requests"></div>
        <h3 data-testid="gig-requests"> Requested Gigs </h3>
        <div className="artist-card" data-testid="artist-card">
          <div className="artist-information" data-testid="artist-card">
            <p data-testid="artist-card"> DRUMMER NEEDED </p>
            <div className="artist-box"></div>
            <button className="edit-button" href="">
              Edit <i className="fa-solid fa-pencil"></i>
            </button>
          </div>
        </div>

        <button
          onClick={() => navigate("/new-gig")}
          className="create-gig"
          data-testid="create-gig-btn"
        >
          {" "}
          CREATE NEW GIG{" "}
        </button>

        {/* ATTENDING GIGS */}
        <div className="accepted-gigs">
          <h3> Accepted Gigs </h3>
          {/* {acceptedGigs()} */}
          <div className="artist-card" data-testid="gigs-accepted">
            <div className="artist-information" data-testid="gigs-accepted">
              <h3 data-testid="gigs-accepted"> Wedding Performer </h3>
              <h4 data-testid="gigs-accepted"> Genre: Rock </h4>
              <h4 data-testid="gigs-accepted"> Location: Newcastle </h4>
              <p data-testid="gigs-accepted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sed ante efficitur, consectetur arcu et, tincidunt sem. Aenean
                varius velit ex, non venenatis lorem porta ut. Donec vitae
                tellus ornare, sagittis metus vel, fringilla mauris. Donec
                sodales diam interdum, pretium est eget, tristique diam. Quisque
                sed nisi tortor. Aliquam non pellentesque arcu, a venenatis
                odio. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
              <div className="artist-box">
                <div className="artist-pricing">£50-60/hour</div>
              </div>
              <button
                onClick={() => navigate("/artists/:name")}
                className="edit-button"
              >
                View More <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
