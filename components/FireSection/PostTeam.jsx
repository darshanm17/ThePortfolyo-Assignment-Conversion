import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PostTeam({ name, position, review, url }) {
  const variants = {
    initial: {
      opacity: 0,
      x: "-255%",
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    transition: {
      delay: 1,
      duration: 4,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
    },
  };
//framer motion library used to animate things a bit :)
  return (
    <>
      <motion.div
        className="post-box"
        variants={variants}
        initial="initial"
        animate="animate"
        whileInView="whileInView"
      >
        <div className="team-item">
          <div className="team-item-inner">
            <div className="team-box">
              <div className="image-works">
                <img alt="Img" src={url} className="image-testimonials" />
              </div>
            </div>
          </div>

          <div className="team-item-divider"></div>
        </div>

        <div className="post-box-inner">
          <div className="divider-m"></div>

          <div className="section-title-inner">{name}</div>

          <div className="section-title-inner section-title-inner-dark">
            {position}
          </div>

          <div className="divider-m"></div>
          <p>{review}</p>
        </div>
      </motion.div>
    </>
  );
}
