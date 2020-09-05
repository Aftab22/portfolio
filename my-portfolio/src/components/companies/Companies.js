import React from "react";
import { companies } from "./companies-object";
import "./Companies.css";

export default function Companies() {
  return (
    <>
      <div className="companies_Container">
        <div className="container">
          <h3>
            Companies I am currently working for / have worked with. <br />
            (Awesome Companies{" "}
            <span style={{ fontSize: "30px" }}>&#128153;</span>)
          </h3>
          <div className="row">
            {companies.map((company) => (
              <a href={company.url} target="_blank" title={company.name}>
                <div className="col-sm-3">
                  <img src={company.img} alt="" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
