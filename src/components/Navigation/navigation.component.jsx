import React, { useState } from "react";
import "./navigation.styles.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="link-container">
        <Link
          to="about"
          smooth={true}
          duration={700}
          className={`navlink ${activeLink === "about" ? "active" : ""}`}
          onClick={() => handleNavLinkClick("about")}
        >
          About Us
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={700}
          className={`navlink ${activeLink === "portfolio" ? "active" : ""}`}
          onClick={() => handleNavLinkClick("portfolio")}
        >
          Portfolio
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={700}
          className={`navlink ${activeLink === "experience" ? "active" : ""}`}
          onClick={() => handleNavLinkClick("experience")}
        >
          Experience
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={700}
          className={`navlink ${activeLink === "contact" ? "active" : ""}`}
          onClick={() => handleNavLinkClick("contact")}
        >
          Contact
        </Link>
      </div>
      <div className="logo-container" onClick={scrollToTop}>
        <img
          src="https://revent-pi.vercel.app/assets/revent-logo.png"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Navigation;
