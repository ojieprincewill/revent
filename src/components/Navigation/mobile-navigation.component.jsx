import React, { useState } from "react";
import { Link } from "react-scroll";

import "./mobile-navigation.styles.scss";

const MobileNavigation = () => {
  const [mobileActiveLink, setMobileActiveLink] = useState(null);

  const handleNavLinkClick = (link) => {
    setMobileActiveLink(link);
  };

  return (
    <div className="mobile-nav">
      <Link
        to="about"
        smooth={true}
        duration={700}
        className={`mobile-navlink ${
          mobileActiveLink === "about" ? "active" : ""
        }`}
        onClick={() => handleNavLinkClick("about")}
      >
        About Us
      </Link>
      <Link
        to="experience"
        smooth={true}
        duration={700}
        className={`mobile-navlink ${
          mobileActiveLink === "experience" ? "active" : ""
        }`}
        onClick={() => handleNavLinkClick("experience")}
      >
        Experience
      </Link>
      <Link
        to="portfolio"
        smooth={true}
        duration={700}
        className={`mobile-navlink ${
          mobileActiveLink === "portfolio" ? "active" : ""
        }`}
        onClick={() => handleNavLinkClick("portfolio")}
      >
        Portfolio
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={700}
        className={`mobile-navlink ${
          mobileActiveLink === "contact" ? "active" : ""
        }`}
        onClick={() => handleNavLinkClick("contact")}
      >
        Contact
      </Link>
    </div>
  );
};

export default MobileNavigation;
