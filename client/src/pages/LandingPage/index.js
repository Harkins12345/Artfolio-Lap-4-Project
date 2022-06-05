import React from "react";
import { default as Layout } from "../../layouts";
import "./styles.css";

const LandingPage = () => {
  return (
    <>
      <Layout />
      <section className="sign-in">
        <div className="container">
          <figure className="gallery-item">
            <img src="" alt="Main image" />
          </figure>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            viverra dictumst posuere aliquet sem nullam in diam.
          </h3>
          <button class="btn btn-primary">Sign In</button>
        </div>
        <p>Haven't got an account? Create one now!</p>
      </section>

      {/* GIG GALLERY */}

      <section className="gallery gig-gallery">
        <div className="container">
          <button class="btn btn-primary">See All Gigs</button>

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
        </div>
      </section>

      {/* ARTISTS GALLERY */}

      <section className="gallery">
        <div className="container">
          <ul className="gallery-list has-scrollbar">
            <button class="btn btn-primary">See All Artists</button>
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
        </div>
      </section>
    </>
  );
};

export default LandingPage;
