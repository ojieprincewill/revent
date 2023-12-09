import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import "./resume.styles.scss";

const Resume = () => {
  //animation controls, element reference, visibility state management
  const control = useAnimation();
  const ref = useRef();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleResumeScroll = () => {
      const resumeTop = ref.current.getBoundingClientRect().top;
      const Animate = resumeTop < window.innerHeight / 2;

      if (Animate && !isMounted) {
        setIsMounted(true);
        control.start("show");
      } else if (!Animate && isMounted) {
        setIsMounted(false);
        control.start("hide");
      }
    };

    window.addEventListener("scroll", handleResumeScroll);

    return () => {
      window.removeEventListener("scroll", handleResumeScroll);
    };
  }, [control, isMounted]);

  const experienceVariants = {
    hide: { opacity: 0, y: "-10%" },
    show: { opacity: 1, y: 0 },
  };

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
      <motion.div
        className="resume-content"
        variants={experienceVariants}
        initial="hide"
        animate={control}
        transition={{ duration: 1.5 }}
        ref={ref}
      >
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
      </motion.div>
    </div>
  );
};

export default Resume;
