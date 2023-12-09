import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import "./about.styles.scss";

const About = () => {
  //controls for image and description and state management for element visibility
  const controlsImage = useAnimation();
  const controlsDescription = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  //animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
  };

  //animation variants for description
  const descriptionVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  //use effect for smooth animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const shouldAnimate = window.scrollY > window.innerHeight / 2;

      //animation and state logic
      if (shouldAnimate && !isVisible) {
        setIsVisible(true);
        controlsImage.start("visible");
        controlsDescription.start("visible");
      } else if (!shouldAnimate && isVisible) {
        setIsVisible(false);
        controlsImage.start("hidden");
        controlsDescription.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, controlsImage, controlsDescription]);

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
        <motion.div
          className="about-image"
          variants={imageVariants}
          initial="hidden"
          animate={controlsImage}
          transition={{ duration: 1.4 }}
        >
          <img
            src="https://revent-pi.vercel.app/assets/Rectangle%2016.png"
            alt="about boy"
          />
        </motion.div>
        <motion.div
          className="about-text"
          variants={descriptionVariants}
          initial="hidden"
          animate={controlsDescription}
          transition={{ duration: 1.4 }}
        >
          <p className="subtitle">We focus on value and excellence</p>
          <p className="subtext">
            We are focused on providing products which deliver demonstrably good
            value for our clients and end-customers - be that a specific return,
            outperforming an index or achieving returns at lower risk.​
          </p>
          <p className="subtext">
            Through achieving value for the clients whose assets we manage,
            efficiently controlling costs, effectiveness and efficiency, we
            deliver value to our shareholders and wider stakeholders
          </p>
          <button className="abt-btn">Work with Us</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
