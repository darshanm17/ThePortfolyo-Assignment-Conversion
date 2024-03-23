import React from "react";
import TimeLinelist from "./TimeLinelist";
import { useState, useEffect } from "react";

export default function TimeLine() {
  const [userdata, setuserdata] = useState([]);
  const [services, setservices] = useState([]);

  const fetchdata = async () => {
    const data = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const res = await data.json();
    setuserdata(res.user.about);

    setservices(res.user.services);
    console.log(res.user.services);
  };
  let count = 0;

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <ul className="timeline">
        {services.map((service) => {
          {// count is to send the no of that particular service and make it toggle
          }
          count++;
          return (
            <>
              <TimeLinelist
                name={service.name}
                descp={service.desc}
                url={service.image.url}
                key={service.id}
                index={count}
                charge={service.charge}
              />
            </>
          );
        })}
      </ul>
    </>
  );
}
