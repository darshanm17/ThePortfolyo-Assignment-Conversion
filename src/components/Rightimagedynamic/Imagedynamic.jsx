import React from "react";

export default function Imagedynamic({ img }) {
  return (
    <>
      <div class="fireOT-right right-side">
        <div class="news-img-container overlay overlay-dark-60">
          <div class="slide-img">
            <img alt="BG Img" src={img} />
          </div>
        </div>
      </div>
    </>
  );
}
