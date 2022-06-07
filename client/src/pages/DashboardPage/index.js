import React from "react";
import "./style.css";

const DashboardPage = () => {
  return (
    <>
      <div className="welcome-section">
        <div className="main-text">
          <h1 className="user-welcome"> Welcome {/* user */} </h1>
          <img
            className="profile-pic"
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Profile-Picture"
          />
        </div>
        <a className="edit" href="">
          Edit <i className="fa-solid fa-pencil"></i>
        </a>
      </div>

      {/*  GIG REQUESTS  */}
      <h3> GIG REQUESTS</h3>
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
      <button> CREATE NEW GIG </button>

      {/* ATTENDING GIGS */}

      <h3> YOUR ATTENDING GIGS </h3>
      <div className="gig-requests">
        {/* {acceptedGigs()} */}
        <div className="artist-card">
          <div className="artist-information">
            <h3> Wedding Performer </h3>
            <h4> Genre: Rock </h4>
            <h4> Location: Newcastle </h4>
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
            <a className="edit" href="">
              View More <i className="fa-solid fa-pencil"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="gig-requests">
        {/* {acceptedGigs()} */}
        <div className="artist-card">
          <div className="artist-information">
            <h3> Wedding Performer </h3>
            <h4> Genre: Rock </h4>
            <h4> Location: Newcastle </h4>
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
