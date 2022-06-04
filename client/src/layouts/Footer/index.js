import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand-wrapper">
            <a href="#" className="logo">
              <img src="" alt="Artfolio logo" />
            </a>

            <div className="footer-menu-wrapper">
              <ul className="footer-menu-list">
                <li>
                  <a href="#hero" className="footer-menu-link">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about" className="footer-menu-link">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-menu-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-quicklinks">
            <ul className="quicklink-list">
              <li>
                <a href="#" className="quicklink-item">
                  Faq
                </a>
              </li>

              <li>
                <a href="#" className="quicklink-item">
                  Help center
                </a>
              </li>

              <li>
                <a href="#" className="quicklink-item">
                  Terms of use
                </a>
              </li>

              <li>
                <a href="#" className="quicklink-item">
                  Privacy
                </a>
              </li>
            </ul>

            <ul className="footer-social-list">
              <li>
                <a href="#" className="footer-social-link">
                  Facebook icon
                </a>
              </li>

              <li>
                <a href="#" className="footer-social-link">
                  Youtube icon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            Copyright &copy; 2022. all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
