import React from "react";
import "../../styles/index.css";

const Footer = () => {
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
        <hr></hr>

        <ul className="footer-sitemap">
          <li className="footer-menu-link">Home</li>

          <li className="footer-menu-link">All Artists</li>

          <li className="footer-menu-link">All Gigs</li>

          <li className="footer-menu-link">Contact us</li>

          <li className="footer-menu-link">Privacy Policy</li>

          <li className="footer-menu-link">Terms & Conditions</li>
        </ul>

        <ul className="footer-social-links">
          <li className="footer-facebook-link">
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li className="footer-instagram-link">
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li className="footer-soundcloud-link">
            <i class="fa-brands fa-soundcloud"></i>
          </li>
        </ul>
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
