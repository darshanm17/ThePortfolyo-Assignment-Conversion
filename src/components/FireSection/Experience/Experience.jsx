import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './Experience.css';
export default function Experience({prop}) {
  const [experiences, setexperiences] = useState([]);
  const [selected, setselected] = useState(null); // selects the current section and shows the description of the choosen one
  const [enable, setenable] = useState(false); //to see weather the current section is selected or not


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

  const education=experiences.filter((Exp)=>Exp.forEducation==true).sort((a,b)=>a.sequence-b.sequence);
  console.log(education);
  return (
    <>
      {prop.map((exp) => {
        const startDateObj = new Date(exp.startDate);
  const startMonthYear = startDateObj.toLocaleString('default', { month: 'long', year: 'numeric' });

  const endDateObj = new Date(exp.endDate);
  const endMonthYear = endDateObj.toLocaleString('default', { month: 'long', year: 'numeric' });
        return (
          <>
            <div className="Container">
              <div
                className="experience-cont"
                style={{ width: "100%", height: "100px", cursor: "pointer" }}
                onClick={() => {
                  handleenable(exp._id);
                }}
              >
              <h2 style={{fontSize:"13px"}}>{startMonthYear}-{endMonthYear} </h2>
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
