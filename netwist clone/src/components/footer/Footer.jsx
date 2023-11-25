import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div>
          <img
            className="logo"
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            alt=""
          />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Home </li>
          <li className="menuItem">About Us </li>
          <li className="menuItem">Contact Us </li>
          <li className="menuItem">Privacy Policy </li>
          <li className="menuItem">Sitemap</li>
        </ul>
        <div className="infoText">
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
        <div className="infoText">© 2022. Ntwist Inc.</div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
