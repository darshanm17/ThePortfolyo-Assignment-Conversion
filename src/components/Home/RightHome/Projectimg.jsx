import React from "react";

export default function Projectimg({ img }) {
  return (
    <>
      <div class="news-img-container mobile overlay overlay-dark-60">
        <div class="slide-img">
          <img alt="BG Img" src={img} />
        </div>
      </div>
    </>
  );
}
