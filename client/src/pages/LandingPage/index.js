import React from "react";
import { useSelector } from "react-redux"
import FooterCTA from "../../components/FooterCTA";

const LandingPage = () => {

  const username = useSelector(state => state.username)

  return (
    <>
      <section className="sign-in">
        <div className="container">
          <figure className="gallery-item">
            <img src="" alt="" />
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
                <img src="" alt="" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="" />
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
                <img src="" alt="" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="" />
              </figure>
            </li>

            <li>
              <figure className="gallery-item">
                <img src="" alt="" />
              </figure>
            </li>
          </ul>
          <button className="btn btn-artist btn-primary">
            See All Artists
          </button>
        </div>
      </section>
      {username ? null : <FooterCTA />}
    </>
  );
};

export default LandingPage;
