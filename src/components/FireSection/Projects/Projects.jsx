import React, { useRef } from "react";

import { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useInView } from "react-intersection-observer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Imagedynamic from "../../Rightimagedynamic/Imagedynamic";
import Projectimg from "../../Home/RightHome/Projectimg";

//Swiper.use([Navigation]);

export default function Projects() {
  const [projects, setprojects] = useState([]);
  const [rightimg, setimage] = useState("");
  const ref = useRef();
  console.log(ref.innerHTML);
  console.log(ref);
  const fetchdata = async () => {
    const data = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const res = await data.json();

    setprojects(res.user.projects);
  };
  console.log(rightimg);

  useEffect(() => {
    fetchdata();
  }, []);
  // Sorting to get in the array in a sequence:)
  const projectseq = projects.sort((a, b) => a.sequence - b.sequence);
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
        {projectseq.map((project) => {
          return (
            <>
              <SwiperSlide>
                <div
                  class="news-item"
                  style={{ width: "100%", height: "" }}
                  ref={ref}
                >
                  <div class="news-bg-wrapper news-bg-1"></div>
                  <div class="news-item-inner" style={{ width: "100%" }}>
                    <div class="text">
                      <div class="divider-m"></div>

                      <img
                        ref={ref}
                        alt="BG Img"
                        src={project.image.url}
                        style={{}}
                        className="project-img"
                      />
                      <div class="news-info-date"></div>

                      <div class="divider-s"></div>

                      <div class="news-info-title">{project.title}</div>

                      <div class="divider-s"></div>

                      <div class="news-info-category">Tech Used</div>

                      <div class="divider-m"></div>

                      <p class="text">
                        {
                          // As techStack is also an array i had map through it again to get info :)
                        }
                        {project.techStack.map((tech) => {
                          return <>{tech}</>;
                        })}
                      </p>

                      <div class="divider-m"></div>

                      <div class="news-details">
                        <div class="the-button-wrapper"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
{
  /*
       <SwiperSlide >
              <div class="news-item" style={{ width: "400px", height: "" }}>
                <div class="news-bg-wrapper news-bg-1"></div>
                <div class="news-item-inner">
                  <div class="text">
                    <div class="divider-m"></div>

                    <img
                      alt="BG Img"
                      src={project.image.url}
                      style={{}}
                      className="project-img"
                    />
                    <div class="news-info-date"></div>

                    <div class="divider-s"></div>

                    <div class="news-info-title">{project.title}</div>

                    <div class="divider-s"></div>

                    <div class="news-info-category">Tech Used</div>

                    <div class="divider-m"></div>

                    <p class="text">
                      {
                        // As techStack is also an array i had map through it again to get info :)
                      }
                      {project.techStack.map((tech) => {
                        return <>{tech}</>;
                      })}
                    </p>

                    <div class="divider-m"></div>

                    <div class="news-details">
                      <div class="the-button-wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide >*/
}
