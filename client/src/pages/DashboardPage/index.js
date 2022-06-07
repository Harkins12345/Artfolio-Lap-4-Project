import React from "react";
import "./style.css";

const DashboardPage = () => {
  return (
    <>
      <div className="welcome-section" data-testid="welcome-section">
        <div className="main-text" data-testid="main-text">
          <h1 className="user-welcome" data-testid="user-welcome">
            {" "}
            Welcome {/* user */}{" "}
          </h1>
          <img
            className="profile-pic"
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Profile-Picture"
          />
        </div>
        <a className="edit" href="" data-testid="edit-btn">
          Edit <i className="fa-solid fa-pencil"></i>
        </a>
      </div>
      {/*  GIG REQUESTS  */}
      <div className="gig-requests" data-testid="gig-requests">
        <div className="projects-status" data-testid="gig-requests">
          <div className="item-status" data-testid="gig-requests">
            <span className="status-number" data-testid="gig-requests">
              5
            </span>
            <span className="status-type" data-testid="gig-requests">
              Gig Requests
            </span>
          </div>
          <div className="item-status" data-testid="upcoming-gigs">
            <span className="status-number" data-testid="upcoming-gigs">
              7
            </span>
            <span className="status-type" data-testid="upcoming-gigs">
              Upcomig Gigs
            </span>
          </div>
        </div>
        {/* {renderGigs()} */}
        <div className="artist-card" data-testid="artist-card">
          <div className="artist-information" data-testid="artist-card">
            <h3 data-testid="artist-card"> DRUMMER NEEDED </h3>
            <h4 data-testid="artist-card"> Genre: Rock </h4>
            <h4 data-testid="artist-card"> Location: London</h4>
            <p data-testid="artist-card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ante efficitur, consectetur arcu et, tincidunt sem. Aenean varius
              velit ex, non venenatis lorem porta ut. Donec vitae tellus ornare,
              sagittis metus vel, fringilla mauris. Donec sodales diam interdum,
              pretium est eget, tristique diam. Quisque sed nisi tortor. Aliquam
              non pellentesque arcu, a venenatis odio. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </p>
            <div className="artist-box">
              <div className="artist-pricing">£50-60/hour</div>
            </div>
            <a className="edit" href="">
              Edit <i className="fa-solid fa-pencil"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="gig-requests">
        {/* {renderGigs()} */}
        <div className="artist-card">
          <div className="artist-information">
            <h3> DRUMMER NEEDED </h3>
            <h4> Genre: Rock </h4>
            <h4> Location: London</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ante efficitur, consectetur arcu et, tincidunt sem. Aenean varius
              velit ex, non venenatis lorem porta ut. Donec vitae tellus ornare,
              sagittis metus vel, fringilla mauris. Donec sodales diam interdum,
              pretium est eget, tristique diam. Quisque sed nisi tortor. Aliquam
              non pellentesque arcu, a venenatis odio. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </p>
            <div className="artist-box">
              <div className="artist-pricing">£50-60/hour</div>
            </div>
            <a className="edit" href="">
              Edit <i className="fa-solid fa-pencil"></i>
            </a>
          </div>
        </div>
      </div>
      <button className="create-gig" data-testid="create-gig-btn">
        {" "}
        CREATE NEW GIG{" "}
      </button>

      {/* ATTENDING GIGS */}

      <h3 data-testid="attending-gig"> YOUR ATTENDING GIGS </h3>
      <div className="gig-requests" data-testid="attending-gig">
        {/* {acceptedGigs()} */}
        <div className="artist-card" data-testid="attending-gig">
          <div className="artist-information" data-testid="attending-gig">
            <h3 data-testid="attending-gig"> Wedding Performer </h3>
            <h4 data-testid="attending-gig"> Genre: Rock </h4>
            <h4 data-testid="attending-gig"> Location: Newcastle </h4>
            <p data-testid="attending-gig">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ante efficitur, consectetur arcu et, tincidunt sem. Aenean varius
              velit ex, non venenatis lorem porta ut. Donec vitae tellus ornare,
              sagittis metus vel, fringilla mauris. Donec sodales diam interdum,
              pretium est eget, tristique diam. Quisque sed nisi tortor. Aliquam
              non pellentesque arcu, a venenatis odio. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </p>
            <div className="artist-box">
              <div className="artist-pricing">£50-60/hour</div>
            </div>
            <a className="edit" href="">
              Edit <i className="fa-solid fa-pencil"></i>
            </a>
            <a className="edit" href="">
              View More <i className="fa-solid fa-pencil"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="gig-requests" data-testid="gigs-accepted">
        {/* {acceptedGigs()} */}
        <div className="artist-card" data-testid="gigs-accepted">
          <div className="artist-information" data-testid="gigs-accepted">
            <h3 data-testid="gigs-accepted"> Wedding Performer </h3>
            <h4 data-testid="gigs-accepted"> Genre: Rock </h4>
            <h4 data-testid="gigs-accepted"> Location: Newcastle </h4>
            <p data-testid="gigs-accepted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              ante efficitur, consectetur arcu et, tincidunt sem. Aenean varius
              velit ex, non venenatis lorem porta ut. Donec vitae tellus ornare,
              sagittis metus vel, fringilla mauris. Donec sodales diam interdum,
              pretium est eget, tristique diam. Quisque sed nisi tortor. Aliquam
              non pellentesque arcu, a venenatis odio. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </p>
            <div className="artist-box">
              <div className="artist-pricing">£50-60/hour</div>
            </div>
            <a className="edit" href="">
              Edit <i className="fa-solid fa-pencil"></i>
            </a>
            <a className="edit" href="">
              View More <i className="fa-solid fa-pencil"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
