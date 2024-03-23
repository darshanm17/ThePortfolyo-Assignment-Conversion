import React from "react";

export default function TimeLinelist({ name, descp, url, index, charge }) {
  return (
    <>
      {
        // to alter toggle the side of lists once inverted and once straight i have used this logic :)
      }
      <li className={index % 2 == 0 ? "timeline-inverted" : null}>
        <div className="timeline-image">
          <img alt="Timeline" className="img-circle img-responsive" src={url} />
        </div>

        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="cd-timeline-date">Charge:{charge}</h4>

            <div className="divider-s"></div>

            <h3 className="cd-timeline-name">{name}</h3>

            <div className="divider-s"></div>

            <h3 className="cd-timeline-name">
              <span className="cd-timeline-position">Full-time</span>
            </h3>

            <div className="divider-m"></div>
          </div>

          <div className="timeline-body">
            <p>{descp}</p>
          </div>
        </div>
      </li>
    </>
  );
}
