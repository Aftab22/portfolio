import React from "react";
import "./Skills.css";
import { skills } from "./skills-object";

export default function Skills() {
  return (
    <>
      <div class="skills_back_rectangle"></div>
      <div class="container bg_dark" id="skills">
        <h1>My Skills</h1>
        <div class="row">
          {skills.map((skill) => (
            <div class="col-sm-3">
              <img src="./images/global.png" alt="" />
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
