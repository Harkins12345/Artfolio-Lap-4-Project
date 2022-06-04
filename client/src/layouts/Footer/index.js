import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="footer-brand-wrapper">
            <a href="#" class="logo">
              <img src="" alt="Artfolio logo" />
            </a>

            <div class="footer-menu-wrapper">
              <ul class="footer-menu-list">
                <li>
                  <a href="#hero" class="footer-menu-link">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about" class="footer-menu-link">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-menu-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-quicklinks">
            <ul class="quicklink-list">
              <li>
                <a href="#" class="quicklink-item">
                  Faq
                </a>
              </li>

              <li>
                <a href="#" class="quicklink-item">
                  Help center
                </a>
              </li>

              <li>
                <a href="#" class="quicklink-item">
                  Terms of use
                </a>
              </li>

              <li>
                <a href="#" class="quicklink-item">
                  Privacy
                </a>
              </li>
            </ul>

            <ul class="footer-social-list">
              <li>
                <a href="#" class="footer-social-link">
                  Facebook icon
                </a>
              </li>

              <li>
                <a href="#" class="footer-social-link">
                  Youtube icon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">Copyright &copy; 2022. all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
