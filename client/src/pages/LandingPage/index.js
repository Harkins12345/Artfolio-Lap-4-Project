import React from "react";
import { default as Layout } from "../../layouts";
import { SignInFooter } from "../../components";
import "../../styles/index.css";

const LandingPage = () => {
  return (
    <>
      <section className="sign-in">
        <div className="container">
          <figure className="gallery-item">
            <img src="" alt="Main image" />
          </figure>
          <h3 id="mainTitle">
            Artfolio - The Marketplace for artists and gigs.
          </h3>
        </div>
      </section>
      {/* GIG GALLERY */}
      <section className="gallery gig-gallery">
        <div className="container">
          <ul className="gallery-list has-scrollbar">
            <li>
              <figure className="gallery-item">
                <img src="" alt="Gig image" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="Gig image" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="Gig image" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="Gig image" />
              </figure>
            </li>
          </ul>
          <button className="btn btn-gig btn-primary">See All Gigs</button>
        </div>
      </section>
      {/* ARTISTS GALLERY */}
      <section className="gallery">
        <div className="container">
          <ul className="gallery-list has-scrollbar">
            <li>
              <figure className="gallery-item">
                <img src="" alt="Artist image" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="Artist image" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="Artist image" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="Artist image" />
              </figure>
            </li>
          </ul>
          <button className="btn btn-artist btn-primary">
            See All Artists
          </button>
        </div>
      </section>
      <SignInFooter /> {/* must dissapear if signed in */}
    </>
  );
};

export default LandingPage;
