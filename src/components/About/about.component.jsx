import React from "react";

import "./about.styles.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-header">
        <p className="title">About Us</p>
        <img
          className="underline"
          src="https://revent-pi.vercel.app/assets/Rectangle%2061.svg"
          alt="underline"
        />
      </div>
      <div className="about-content">
        <div className="about-image">
          <img
            src="https://revent-pi.vercel.app/assets/Rectangle%2016.png"
            alt="about boy"
          />
        </div>
        <div className="about-text">
          <p className="subtitle">We focus on value and excellence</p>
          <p className="subtext">
            We are focused on providing products which deliver
            <br />
            demonstrably good value for our clients and
            <br />
            end-customers - be that a specific return,
            <br />
            outperforming an index or achieving returns at lower
            <br />
            risk.​
          </p>
          <p className="subtext">
            Through achieving value for the clients whose assets we
            <br />
            manage, efficiently controlling costs, effectiveness and
            <br />
            efficiency, we deliver value to our shareholders and
            <br />
            wider stakeholders
          </p>
          <button className="abt-btn">Work with Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
