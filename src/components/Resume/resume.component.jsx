import React from "react";

import "./resume.styles.scss";

const Resume = () => {
  return (
    <div id="experience" className="resume">
      <div className="resume-header">
        <p className="title">Resume</p>
        <img
          className="underline"
          src="https://revent-pi.vercel.app/assets/Rectangle%2061.svg"
          alt="underline"
        />
      </div>
      <div className="resume-content">
        <div className="content1">
          <img
            src="https://revent-pi.vercel.app/assets/Line%206.svg"
            alt="border-left"
          />
          <div className="text-cont">
            <div className="resume-text">
              <span className="date">2017</span>
              <span className="job-title">Louisanna State University</span>
              <span className="description">Lorem Ipseum</span>
            </div>
            <div className="resume-text">
              <span className="date">2018</span>
              <span className="job-title">Harvard Edx</span>
              <span className="description">Principles of Design</span>
            </div>
          </div>
        </div>
        <div className="content2">
          <img
            src="https://revent-pi.vercel.app/assets/Line%206.svg"
            alt="border-left"
          />
          <div className="text-cont">
            <div className="resume-text">
              <span className="date">2019</span>
              <span className="job-title">Udacity</span>
              <span className="description">Product Design</span>
            </div>
            <div className="resume-text">
              <span className="date">2020</span>
              <span className="job-title">Microsoft Partner</span>
              <span className="description">Platinum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
