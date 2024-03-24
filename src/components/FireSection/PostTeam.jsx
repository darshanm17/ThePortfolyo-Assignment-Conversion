import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./PostTeam.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function PostTeam({ name, position, review, url }) {
  const [userdata, setuserdata] = useState([]);
  const [teamdata, setteamdata] = useState([]);

  const fetchdata = async () => {
    const data = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const res = await data.json();
    setuserdata(res.user.about);
    setteamdata(res.user.testimonials);
  };

  useEffect(() => {
    fetchdata();
  }, []);
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
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: "700px" }}
        className="Swiper-cont"
      >
        {teamdata.map((team) => {
          return (
            <>
              <SwiperSlide>
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
                          <img
                            alt="Img"
                            src={team.image.url}
                            className="image-testimonials"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="team-item-divider"></div>
                  </div>

                  <div className="post-box-inner">
                    <div className="divider-m"></div>

                    <div className="section-title-inner">{team.name}</div>

                    <div className="section-title-inner section-title-inner-dark">
                      {team.position}
                    </div>

                    <div className="divider-m"></div>
                    <p>{team.review}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
