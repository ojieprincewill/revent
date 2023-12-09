import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import "./portfolio.styles.scss";

const Portfolio = () => {
  const options = ["All", "Website", "MobileApp", "CSS", "GitHub"];
  const [activeOption, setActiveOption] = useState("All");
  const [showing, setShowing] = useState(false);

  const controlOptions = useAnimation();
  const controlPhotos = useAnimation();
  const ref = useRef();

  const optionsVariants = {
    noShow: { opacity: 0, y: "-20%" },
    showNow: { opacity: 1, y: 0 },
  };

  const photosVariants = {
    noShow: { opacity: 0, y: "20%" },
    showNow: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const portfolioTop = ref.current.getBoundingClientRect().top;
      const animateStart = portfolioTop < window.innerHeight / 2;

      if (animateStart && !showing) {
        setShowing(true);
        controlOptions.start("showNow");
        controlPhotos.start("showNow");
      } else if (!animateStart && showing) {
        setShowing(false);
        controlOptions.start("noShow");
        controlPhotos.start("noShow");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlOptions, controlPhotos, showing]);

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
        <motion.div
          variants={optionsVariants}
          initial="noShow"
          animate={controlOptions}
          transition={{ duration: 1.3 }}
          className="option-container"
          ref={ref}
        >
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
        </motion.div>
        <motion.div
          variants={photosVariants}
          initial="noShow"
          animate={controlPhotos}
          transition={{ duration: 1.3 }}
          className="port-img-cont"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
