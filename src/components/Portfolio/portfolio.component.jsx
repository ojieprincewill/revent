import React, { useState } from "react";

import "./portfolio.styles.scss";

const Portfolio = () => {
  const options = ["All", "Website", "MobileApp", "CSS", "GitHub"];
  const [activeOption, setActiveOption] = useState("All");

  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-header">
        <p className="title">Portfolio</p>
        <img
          className="underline"
          src="https://revent-pi.vercel.app/assets/Rectangle%2061.svg"
          alt="underline"
        />
      </div>
      <div className="port-content">
        <div className="option-container">
          {options.map((option) => (
            <span
              key={option}
              className={`port-option ${
                activeOption === option ? "active" : ""
              }`}
              onClick={() => setActiveOption(option)}
            >
              {option}
            </span>
          ))}
        </div>
        <div className="port-img-cont">
          <img
            src="https://revent-pi.vercel.app/assets/Rectangle%2026.png"
            alt="port-card"
          />
          <img
            src="https://revent-pi.vercel.app/assets/Rectangle%2026.png"
            alt="port-card"
          />
          <img
            src="https://revent-pi.vercel.app/assets/Rectangle%2026.png"
            alt="port-card"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
