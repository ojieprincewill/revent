import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="entry-text">
        <h1 className="title">
          Innovative Solution
          <br />
          Taliored to your
          <br />
          Business need
        </h1>
        <p className="text">
          We can partner with your business to provide a symbiotic
          <br />
          relationship and synergy to help you or your business
          <br />
          achieve more business growth through strategic financial
          <br />
          advisory, investment business and human resource
          <br />
          planning and management.​
        </p>
        <div className="button-cont">
          <button className="get-in-touch">Get In touch</button>
          <div className="social-cont">
            <img
              className="social-logo"
              src="https://revent-pi.vercel.app/assets/be.svg"
              alt="be"
            />
            <img
              className="social-logo"
              src="https://revent-pi.vercel.app/assets/dribble.svg"
              alt="dribble"
            />
            <img
              className="social-logo"
              src="https://revent-pi.vercel.app/assets/facebook.svg"
              alt="facebook"
            />
          </div>
        </div>
      </div>
      <div className="vector-container">
        <img
          className="vector1"
          src="https://revent-pi.vercel.app/assets/Vector.png"
          alt="vector1"
        />
        <img
          className="vector2"
          src="https://revent-pi.vercel.app/assets/Rectangle%2092.png"
          alt="vector2"
        />
      </div>
    </div>
  );
};

export default Header;
