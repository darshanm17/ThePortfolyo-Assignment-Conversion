import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Skills() {
  const containerref = useRef();
  const [position, setposition] = useState(0);

  const [skills, setskills] = useState([]);
  const fetchdata = async () => {
    const data = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const res = await data.json();

    setskills(res.user.skills);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  // As i needed to show the results in particular sequence i had to sort this according to the sequence :)
  const skillsequence = skills.sort((a, b) => a.sequence - b.sequence);
  //I tried somwthing different to scroll the particular component it did work but it wasnt looking good for the particular ui:) if any one wants to try can try it :)
  // const ITEM_WIDTH = 300;
  // const handlepos = (scrollamount) => {
  //   const newscrollpos = position + scrollamount;
  //   setposition(newscrollpos);
  //   containerref.current.scrollLeft = newscrollpos;
  // };
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
        style={{ width: "100%" }}
        className="Swiper-cont"
      >
        <div className="skill-cont" ref={containerref}>
          {skillsequence.map((skill) => {
            return (
              <>
                <SwiperSlide>
                  <div className="ind-skill-cont">
                    <h2 class="section-subheading">{skill.name}</h2>
                    <img
                      className="skills-img"
                      alt="BG Img"
                      src={skill.image.url}
                    />
                    <div className="percentage-cont">
                      <div className="percentage-cont-outline">
                        <div
                          // To show the percentage i took the percentage from each skill and multiplied it by 1.2 and set the style as follows:
                          style={{
                            width: 1.2 * skill.percentage,
                            backgroundColor: "white",
                            padding: "2px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </div>
      </Swiper>
    </>
  );
}
