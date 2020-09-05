import React from "react";
import Header from "../header/Header";
import About from "../about/About";
import Skills from "../skills/Skills";

function App() {
  return (
    <div id="app_body" className="dark_mode_off">
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
