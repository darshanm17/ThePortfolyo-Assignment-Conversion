import React, { useRef, useState, useEffect } from "react";
import FireAbout from "./FireAbout";
import Projects from "./Projects/Projects";
import SkillsHead from "./Skills/SkillsHead";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import { useInView } from "react-intersection-observer";

export default function FireSection() {
  const ITEM_WIDTH = 800;
  const [position, setposition] = useState(0);
  const handlepos = (getitem) => {
    const newpos = position + getitem;
    setposition(newpos);
    Cursorref.current.scrollLeft = newpos;
  };
  const Cursorref = useRef(null);
  const [experiences, setexperiences] = useState([]);

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

  const education = experiences
    .filter((Exp) => Exp.forEducation == true)
    .sort((a, b) => a.sequence - b.sequence);
  console.log(education);
  const experience = experiences
    .filter((Exp) => Exp.forEducation == false)
    .sort((a, b) => a.sequence - b.sequence);
  return (
    <>
      <section class="fireOT">
        <div class="fireOT-left left-side" id="about">
          <div class="divider-xl"></div>

          <FireAbout />

          <div class="divider-l visible-mobile-devices-xs"></div>
        </div>

        <div class="fireOT-right right-side">
          <div class="about-img-container overlay overlay-dark-60">
            <div class="slide-img">
              <img
                alt="BG Img"
                src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288679775-y4qwn3"
              />
            </div>
          </div>
        </div>

        <div class="fireOT-left left-side" id="works">
          <div class="divider-xl"></div>

          <SkillsHead />

          <div class="divider-l visible-mobile-devices-xs"></div>
        </div>

        <div class="fireOT-right right-side">
          <div class="works-img-container overlay overlay-dark-60">
            <div class="slide-img">
              <img
                alt="BG Img"
                src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2022/08/shutterstock_experience_letter-1024x683.jpg"
              />
            </div>
          </div>
        </div>

        <div class="fireOT-left left-side" id="services">
          <div class="divider-xl"></div>

          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-subheading-wrapper-all">
                  <h2 class="section-subheading">
                    <span></span>
                  </h2>
                </div>

                <div class="divider-s"></div>

                <h2 class="home-page-title-all">Education</h2>
              </div>
            </div>

            <div class="divider-l"></div>

            <div class="row">
              <div class="col-lg-12">
                <div class="panel-wrapper">
                  <div
                    class="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <Experience prop={education} />
                    <div class="divider-s"></div>

                    <h2 class="home-page-title-all">Experience</h2>
                    <Experience prop={experience} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="divider-l visible-mobile-devices-xs"></div>
        </div>

        <div class="fireOT-right right-side">
          <div class="services-img-container overlay overlay-dark-60">
            <div class="slide-img">
              <img
                alt="BG Img"
                src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706284812399-jr7rqj"
              />
            </div>
          </div>
        </div>

        <div class="fireOT-left left-side" id="news">
          <div class="divider-xl"></div>

          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-subheading-wrapper-all">
                  <h2 class="section-subheading">
                    <span>MY VISSIONS</span>
                  </h2>
                </div>

                <div class="divider-s"></div>

                <h2 class="home-page-title-all">Projects</h2>
              </div>
            </div>

            <div class="row">
              <div className="project-cont" ref={Cursorref}>
                <Projects />
              </div>
              <div></div>
            </div>
          </div>

          <div class="divider-l visible-mobile-devices-xs"></div>
        </div>

        <div class="fireOT-right right-side">
          <div class="news-img-container overlay overlay-dark-60">
            <div class="slide-img">
              <img
                alt="BG Img"
                src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357680224-phijt.png"
              />
            </div>
          </div>
        </div>

        <div class="fireOT-left left-side" id="contact">
          <div class="divider-xl"></div>

          <Contact />

          <div class="divider-l-2"></div>
        </div>

        <div class="fireOT-right right-side">
          <div class="contact-img-container overlay overlay-dark-60">
            <div class="slide-img">
              <img
                alt="BG Img"
                src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
