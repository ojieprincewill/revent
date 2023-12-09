import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import "./get-in-touch.styles.scss";

const GetInTouch = () => {
  const controlContact = useAnimation();
  const ref = useRef();
  const [showForm, setShowForm] = useState(false);

  const formVariants = {
    open: { opacity: 1, y: "2%" },
    close: { opacity: 0, y: 0 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const contactTop = ref.current.getBoundingClientRect().top;
      const displayAnimation = contactTop < window.innerHeight / 2;

      if (displayAnimation && !showForm) {
        setShowForm(true);
        controlContact.start("open");
      } else if (!displayAnimation && showForm) {
        setShowForm(false);
        controlContact.start("close");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlContact, showForm]);
  return (
    <div id="contact" className="get-in-touch-cont">
      <div className="intouch-header">
        <p className="title">Get in Touch</p>
        <img
          className="underline"
          src="https://revent-pi.vercel.app/assets/Rectangle%2061.svg"
          alt="underline"
        />
      </div>
      <motion.div
        variants={formVariants}
        initial="close"
        animate={controlContact}
        transition={{ duration: 1.7 }}
        ref={ref}
      >
        <div className="contact-flex">
          <div className="contact">
            <img
              src="https://revent-pi.vercel.app/assets/call%201.svg"
              alt="call"
            />
            <span className="contact-title">Call Us</span>
            <span className="contact-subtitle">+234-806 749-700</span>
          </div>
          <div className="contact">
            <img
              src="https://revent-pi.vercel.app/assets/send%201.svg"
              alt="send"
            />
            <span className="contact-title">Send Email</span>
            <span className="contact-subtitle">revent@digital.com</span>
          </div>
        </div>
        <div className="input-flex">
          <div>
            <input className="input-field" type="text" />
          </div>
          <div>
            <input className="input-field" type="text" />
          </div>
        </div>
        <div className="inputs">
          <div>
            <input className="input-field" type="text" />
          </div>
          <div>
            <textarea className="textarea" />
          </div>
          <button className="contact-button">Send message</button>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
