import React from "react";
import download_icon from "../../assets/images/download.png";
import aftab_rounded from "../../assets/images/aftab_rounded_3.png";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="about_container">
        {/* this is a bootstrap container */}
        <div className="container">
          <h1>About Me</h1>
          <div className="row">
            <div className="col-sm-4">
              <img src={aftab_rounded} height="250px" alt="" />
              <div className="row">
                <a
                  title="aftab's github"
                  href="https://github.com/aftab22"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a
                  title="aftab's instagram"
                  href="https://www.instagram.com/aftabfaisal/"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  title="aftab's stackoverflow"
                  href="https://stackoverflow.com/users/10879012/aftab22"
                  target="_blank"
                >
                  <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-8">
              <h2>
                Hello, I’m
                <span
                  style={{
                    background: "#00a8cc",
                    color: "#ffff",
                    borderRadius: "4px",
                    padding: "5px",
                    margin: "0 5px",
                  }}
                >
                  Aftab
                </span>
                .Nice to meet you.
              </h2>
              <br />
              <p>
                I am a front end developer . I have 2 years of experience
                working as a React JS developer. I have worked on several
                ReactJS projects and am highly skilled in front end web
                technologies and frameworks.
                <br />
                <br />
                I'm extremely passionate about web development and design.
              </p>
              <a
                title="download my resume?"
                id="my_resume"
                href="https://drive.google.com/file/d/1SRYl14bmIGG2VpzgBh8SEVng8int9KmE/view"
                target="_blank"
              >
                <img src={download_icon} alt="" /> My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
