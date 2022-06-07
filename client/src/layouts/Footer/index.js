import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-top">
        <img
          src="/images/artfolio-cream.png"
          alt="Artfolio logo"
          className="footer-logo"
        />

        <p className="footer-slogan">
          Your marketplace for the latest artists and gigs
        </p>
        <div className="footer-line-container">
          <hr className="footer-line"></hr>
        </div>

        <div className="footer-sitemap">
          <div onClick={() => navigate("/")} className="footer-menu-link">
            Home
          </div>

          <div
            onClick={() => navigate("/artists")}
            className="footer-menu-link"
          >
            All Artists
          </div>

          <div onClick={() => navigate("/gigs")} className="footer-menu-link">
            All Gigs
          </div>

          <div className="footer-menu-link">Contact us</div>

          <div className="footer-menu-link">Privacy Policy</div>

          <div className="footer-menu-link">Terms & Conditions</div>
        </div>

        <div className="footer-social-links">
          <div className="footer-facebook-link">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="footer-instagram-link">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="footer-soundcloud-link">
            <i className="fa-brands fa-soundcloud"></i>
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
