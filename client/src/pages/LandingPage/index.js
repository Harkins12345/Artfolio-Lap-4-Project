import React from "react";
import { default as Layout } from "../../layouts";
import "./styles.css";

const LandingPage = () => {
  return (
    <>
      <Layout />

      {/* GIG GALLERY */}

      <section className="gallery">
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
        </div>
      </section>
    </>
  );
};

export default LandingPage;
