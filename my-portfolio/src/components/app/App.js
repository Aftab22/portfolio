import React from "react";
import Header from "../header/Header";
import About from "../about/About";
import Skills from "../skills/Skills";
import Companies from "../companies/Companies";
import Footer from "../footer/Footer";

function App() {
  return (
    <div id="app_body" className="dark_mode_off">
      <Header />
      <About />
      <Skills />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
