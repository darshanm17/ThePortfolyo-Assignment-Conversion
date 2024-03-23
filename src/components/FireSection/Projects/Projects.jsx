import React from "react";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setprojects] = useState([]);
  const fetchdata = async () => {
    const data = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const res = await data.json();

    setprojects(res.user.projects);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  // Sorting to get in the array in a sequence:)
  const projectseq = projects.sort((a, b) => a.sequence - b.sequence);
  return (
    <>
      {projectseq.map((project) => {
        return (
          <>
            <div>
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
            </div>
          </>
        );
      })}
    </>
  );
}
