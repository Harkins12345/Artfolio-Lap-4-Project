import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-top" data-testid="footer-top">
        <div className="footer-content container-xl ">
          <div>
            <img
              src="/images/artfolio-cream.png"
              alt="Artfolio logo"
              className="footer-logo"
            />

            <p className="footer-slogan" data-testid="footer-slogan">
              Your marketplace for the latest artists
            </p>
          </div>

          <div
            className="footer-line-container"
            data-testid="footer-line-container"
          >
            <hr className="footer-line"></hr>
          </div>

          <div className="footer-sitemap-1" data-testid="footer-sitemap">
            <div
              onClick={() => navigate("/")}
              className="footer-menu-link"
              data-testid="footer-home-link"
            >
              Home
            </div>

            <div
              onClick={() => navigate("/artists")}
              className="footer-menu-link"
              data-testid="footer-artists-btn"
            >
              All Artists
            </div>

            <div
              onClick={() => navigate("/demo")}
              className="footer-menu-link"
              data-testid="footer-about-btn"
            >
              About us
            </div>
          </div>
          <div className="footer-sitemap-2" data-testid="footer-sitemap">
            <div
              onClick={() => navigate("/demo")}
              className="footer-menu-link"
              data-testid="footer-menu-link"
            >
              Contact us
            </div>

            <div
              onClick={() => navigate("/demo")}
              className="footer-menu-link"
              data-testid="footer-menu-link"
            >
              Privacy Policy
            </div>

            <div
              onClick={() => navigate("/demo")}
              className="footer-menu-link"
              data-testid="footer-menu-link"
            >
              Terms & Conditions
            </div>
          </div>

          <div className="footer-social-links">
            <div
              onClick={() => navigate("/demo")}
              className="footer-facebook-link"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div
              onClick={() => navigate("/demo")}
              className="footer-instagram-link"
            >
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div
              onClick={() => navigate("/demo")}
              className="footer-soundcloud-link"
            >
              <i className="fa-brands fa-soundcloud"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container-xl">
          <p className="copyright">
            Artfol.io ©2022. Created and designed by{" "}
            <a
              href="https://github.com/AlbertStoykov"
              target="_blank"
              rel="noreferrer"
            >
              Albert
            </a>
            ,{" "}
            <a
              href="https://github.com/jianli1028"
              target="_blank"
              rel="noreferrer"
            >
              Jianli
            </a>
            ,{" "}
            <a
              href="https://github.com/Harkins12345"
              target="_blank"
              rel="noreferrer"
            >
              Michael
            </a>
            ,{" "}
            <a
              href="https://github.com/PrishalM"
              target="_blank"
              rel="noreferrer"
            >
              Prishal
            </a>
            , and{" "}
            <a
              href="https://github.com/yusra-tahir"
              target="_blank"
              rel="noreferrer"
            >
              Yusra
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
