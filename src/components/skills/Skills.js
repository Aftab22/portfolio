import React from "react";
import "./Skills.css";
import { skills } from "./skills-object";

export default function Skills() {
  return (
    <>
      <div className="skills_back_rectangle"></div>
      <div className="container bg_dark" id="skills">
        <h1>My Skills</h1>
        <div className="row">
          {skills.map((skill) => (
            <div className="col-sm-3">
              <h3>{skill.title}</h3>
              <ul>
                {skill.contents.map((content) => (
                  <li>
                    <img src={content.img} alt="" /> {content.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
