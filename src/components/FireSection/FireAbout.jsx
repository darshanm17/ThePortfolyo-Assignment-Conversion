import React from "react";
import { useState, useEffect } from "react";
import PostTeam from "./PostTeam";
import TimeLine from "./TimeLine";
import AboutHeading from "./AboutHeading";
import { motion } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function FireAbout() {
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

  return (
    <>
      <div className="container">
        <AboutHeading />

        <div className="divider-l"></div>
        <div className="Testimonial-cont">
          <PostTeam />
        </div>
        <div className="divider-l"></div>

        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="owl-carousel" id="owl-carousel-team"></div>
          </div>
        </div>

        <div className="divider-m"></div>
      </div>

      <div className="divider-l"></div>

      <div className="row" style={{ marginLeft: "0px" }}>
        <h2 className="home-page-title-all" style={{ marginBottom: "50px" }}>
          What I Do
        </h2>
        <div className="col-lg-12">
          <TimeLine />
        </div>
      </div>
    </>
  );
}
