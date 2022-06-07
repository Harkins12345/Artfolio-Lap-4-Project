import React from "react";
import FooterCTA from "../../components/FooterCTA";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero-section">
        <div className="container-xl">
          <img
            src="https://s2.r29static.com/bin/public/be6/0,0,2000,1050/x,80/1501654/image.jpg"
            alt=""
            className="hero-image my-3"
          />
          <h1 className="hero-title">
            Artfol.io - The Marketplace for artists and gigs.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            viverra dictumst posuere aliquet sem nullam in diam.
          </p>

          <div
            onClick={() => navigate("/sign-in")}
            className="btn primary-cta-btn"
          >
            <i className="fa-regular fa-user"></i>
            Sign In
          </div>
          <div className="hero-btn-microcopy">
            Haven't got an account?&nbsp;
            <span className="createAccountNow" data-testid="createAccBtn">
              Create one now!
            </span>
          </div>
        </div>
      </section>

      <section className="gig-section">
        <div className="container-xl">
          <h2 className="gigs-title">Gigs</h2>
          <ul className="gallery-list has-scrollbar">
            <li>
              <div className="gallery-item">
                <img
                  src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
                  alt=""
                />
                <div className="gallery-content">
                  <h3 className="gallery-item-title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="gallery-item-description">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                  <div className="gallery-rating-price-row">
                    <div className="gallery-item-rating">4.9</div>
                    <div className="gallery-item-price">£00.00</div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="gallery-item">
                <img
                  src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
                  alt=""
                />
                <div className="gallery-content">
                  <h3 className="gallery-item-title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="gallery-item-description">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                  <div className="gallery-rating-price-row">
                    <div className="gallery-item-rating">4.9</div>
                    <div className="gallery-item-price">£00.00</div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="gallery-item">
                <img
                  src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
                  alt=""
                />
                <div className="gallery-content">
                  <h3 className="gallery-item-title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="gallery-item-description">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                  <div className="gallery-rating-price-row">
                    <div className="gallery-item-rating">4.9</div>
                    <div className="gallery-item-price">£00.00</div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="gallery-item">
                <img
                  src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
                  alt=""
                />
                <div className="gallery-content">
                  <h3 className="gallery-item-title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="gallery-item-description">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                  <div className="gallery-rating-price-row">
                    <div className="gallery-item-rating">4.9</div>
                    <div className="gallery-item-price">£00.00</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div className="all-gig-btn-container">
            <div
              onClick={() => navigate("/gigs")}
              className="btn secondary-cta-btn"
            >
              <i className="me-2 fa-solid fa-music"></i>
              View All Gigs
            </div>
          </div>
        </div>
      </section>

      <section className="artist-section">
        <div className="container-xl">
          <h2 className="artists-title">Artists</h2>
          <ul className="gallery-list has-scrollbar">
            <li>
              <div className="gallery-item-artist">
                <img
                  src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
                  alt=""
                />
                <div className="gallery-content">
                  <h3 className="gallery-item-title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="gallery-item-description">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                  <div className="gallery-rating-price-row">
                    <div className="gallery-item-rating">4.9</div>
                    <div className="gallery-item-price">£00.00</div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="gallery-item-artist">
                <img
                  src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
                  alt=""
                />
                <div className="gallery-content">
                  <h3 className="gallery-item-title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="gallery-item-description">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                  <div className="gallery-rating-price-row">
                    <div className="gallery-item-rating">4.9</div>
                    <div className="gallery-item-price">£00.00</div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="gallery-item-artist">
                <img
                  src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
                  alt=""
                />
                <div className="gallery-content">
                  <h3 className="gallery-item-title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="gallery-item-description">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                  <div className="gallery-rating-price-row">
                    <div className="gallery-item-rating">4.9</div>
                    <div className="gallery-item-price">£00.00</div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="gallery-item-artist">
                <img
                  src="https://heavy.com/wp-content/uploads/2016/02/martin_super_bowl-e1454699147664.jpg"
                  alt=""
                />
                <div className="gallery-content">
                  <h3 className="gallery-item-title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="gallery-item-description">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                  <div className="gallery-rating-price-row">
                    <div className="gallery-item-rating">4.9</div>
                    <div className="gallery-item-price">£00.00</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="all-gig-btn-container">
            <div
              onClick={() => navigate("/artists")}
              className="btn secondary-cta-btn"
            >
              <i className="me-2 fa-solid fa-user-group"></i>
              View All Artists
            </div>
          </div>
          ß
        </div>
      </section>
      <FooterCTA />
    </>
  );
};

export default LandingPage;
