import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="container">
          <div className="footer_content">
            <h2>You can contact me via email / whatsapp</h2>
            <div className="row">
              <a href="mailto:aftab.22.1996@gmail.com@gmail.com">
                <i
                  className="fa fa-envelope"
                  aria-hidden="true"
                  title="gmail"
                ></i>
              </a>
              <a href="https://wa.me/+918088110610" target="_blank">
                <i
                  className="fa fa-whatsapp"
                  aria-hidden="true"
                  title="whatsapp"
                ></i>
              </a>
              <a href="tel:+918088110610">
                <i
                  className="fa fa-phone"
                  aria-hidden="true"
                  title="copy number"
                ></i>
              </a>
            </div>
            <br />
            <br />
            <p>
              I've made this website using ReactJS.
              <br />
              It is being hosted using AWS amplify with built in CICD.(P.S It
              also has a dark mode).
              <span style={{ fontSize: "20px" }}>&#128522;</span>
            </p>
            <br />
            <p>© Aftab </p>
          </div>
        </div>
      </div>
    </>
  );
}
