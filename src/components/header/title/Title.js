import React from "react";
import "./Title.css";
import hi_gif from "../../../assets/images/hi_aftab22.gif";

export default function Title() {
  return (
    <div>
      <div id="title_container">
        <img className="responsive-image" src={hi_gif} alt="" />
        <h1>Hi! I'm Aftab</h1>
        <h2>
          I am a front end web-application /{" "}
          <span style={{ color: "#00a8cc" }}>React</span> developer
        </h2>
        <div className="mouse_container">
          <div className="mouse_outline">
            <div className="scroll_wheel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
