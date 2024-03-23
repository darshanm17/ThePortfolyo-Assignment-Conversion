import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const [experiences, setexperiences] = useState([]);
  const [selected, setselected] = useState(null); // selects the current section and shows the description of the choosen one
  const [enable, setenable] = useState(false); //to see weather the current section is selected or not

  const fetchdata = async () => {
    const data = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const res = await data.json();

    setexperiences(res.user.timeline);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const handleenable = (id) => {
    setselected(id === selected ? null : id);

    setenable(!enable);
  };
  //framer motion library used to animate things a bit :)
  const variants = {
    initial: {
      opacity: 0,
      y: -220,
    },
    animation: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      {experiences.map((exp) => {
        return (
          <>
            <div>
              <div
                className="experience-cont"
                style={{ width: "100%", height: "100px", cursor: "pointer" }}
                onClick={() => {
                  handleenable(exp._id);
                }}
              >
                <button className="experiencetoggle">+ </button>
                <h2 class="section-subheading">
                  <span>{exp.company_name}</span>
                </h2>

                <h1>{exp.jobTitle}</h1>
              </div>

              <div>
                {exp.bulletPoints.map((points) => {
                  return (
                    <>
                      {selected === exp._id && (
                        <motion.div
                          className="bullet_points"
                          variants={variants}
                          initial="initial"
                          animate="animation"
                        >
                          <p>{points}</p>
                        </motion.div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
