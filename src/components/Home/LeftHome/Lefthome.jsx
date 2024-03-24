import React from "react";
import { useState, useEffect } from "react";

export default function Lefthome() {
  const [userdata, setuserdata] = useState([]);
  const fetchdata = async () => {
    const data = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const res = await data.json();
    setuserdata(res.user.about);
  };

  console.log(userdata);
  useEffect(() => {
    fetchdata();
  }, []);
  const { name, title, subTitle, description, quote } = userdata;
  return (
    <div class="left-side-home john-head" id="home">
      <div class="header">
        <div class="logo"></div>
      </div>

      <div class="center-container-home">
        <div class="center-block-home">
          <div class="container-home">
            <div class="introduction">
              <h3
                style={{
                  fontSize: "20px",
                  color: "whitesmoke",
                  opacity: "0.5",
                  paddingBottom: "10px",
                  marginTop: "20px",
                }}
              >
                {title}
              </h3>
              <h1 class="home-page-title">{name}</h1>
              <h3
                style={{
                  fontSize: "20px",
                  color: "whitesmoke",
                  opacity: "0.5",
                  paddingBottom: "10px",
                  marginTop: "20px",
                }}
              >
                {quote}
              </h3>

              <div class="divider-m-2"></div>

              <p>{description}</p>
              <div class="divider-m-2"></div>

              <div class="the-button-wrapper the-button-wrapper-home">
                <a class="page-scroll" href="#contact">
                  <div class="the-button">CONTACT</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
