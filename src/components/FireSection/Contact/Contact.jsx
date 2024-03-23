import React from "react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [userdata, setuserdata] = useState([]);
  const [email, setemail] = useState([]);

  const fetchdata = async () => {
    const data = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const res = await data.json();
    setuserdata(res.user.about);
    setemail(res.user.email);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const { phoneNumber, address } = userdata;
  const { Email } = email;
 
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-subheading-wrapper-all">
              <h2 class="section-subheading">
                <span>Get in touch</span>
              </h2>
            </div>

            <div class="divider-s"></div>

            <h2 class="home-page-title-all">Contact</h2>
          </div>
        </div>

        <div class="divider-l"></div>

        <div class="row">
          <div class="col-md-6 col-all">
            <h6 class="contact">
              <span class="awesome">Street</span> address
            </h6>

            <div class="divider-m"></div>

            <div class="txt">
              <p>{address}</p>
            </div>

            <div class="divider-m visible-mobile-devices"></div>
          </div>

          <div class="col-md-6 col-all">
            <h6 class="contact">
              <span class="awesome">Contact</span> inquiry
            </h6>

            <div class="divider-m"></div>

            <div class="txt">
              <p>
                <a class="link-effect" href="mailto:contact@domainname.com">
                  portfolio3@gmail.com
                </a>
                <br />
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>

        <div class="divider-l"></div>

        <div class="row">
          <div class="col-lg-12 col-all">
            <h6 class="contact">
              <span class="awesome">Inquiry</span> form
            </h6>

            <div class="divider-m"></div>
          </div>

          <div id="contact-form">
            <form action="contact.php" id="form" method="post" name="send">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <input
                  class="requiredField name"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
              </div>

              <div class="col-sm-12 col-md-6 col-lg-6">
                <input
                  class="requiredField email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="text"
                />
              </div>

              <div class="col-sm-12 col-md-12 col-lg-12">
                <input
                  class="requiredField subject"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                />
              </div>

              <div class="make-space">
                <textarea
                  class="requiredField message"
                  id="message"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>

              <div>
                <div class="the-button-wrapper the-button-wrapper-form">
                  <button
                    class="the-button the-button-submit"
                    id="submit"
                    type="submit"
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="divider-xl"></div>

        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="copyright">
              <a href="#">Runex</a> &copy; All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
