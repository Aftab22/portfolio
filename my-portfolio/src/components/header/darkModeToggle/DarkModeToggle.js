import React, { Component } from "react";

import "./DarkModeToggle.css";

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode = (e) => {
    let main = document.getElementById("app_body");
    if (e.target.checked) {
      main.classList.add("dark_mode_on");
    } else {
      main.classList.remove("dark_mode_on");
    }

    this.setState({ darkMode: e.target.checked });
  };

  render() {
    const sun_emoji = <>&#127769;</>;
    const moon_emoji = <>&#127774;</>;
    return (
      <>
        {/* Dark and Light mode toggle */}
        <div
          className={`toggle_button__container ${
            !this.state.darkMode ? "sun_emoji" : "moon_emoji"
          }`}
        >
          <label className="hide_defalt_checkbox">
            <input type="checkbox" onChange={this.toggleDarkMode} />
            <span className="icon_container">
              {!this.state.darkMode ? sun_emoji : moon_emoji}
            </span>
          </label>
        </div>
      </>
    );
  }
}

export default DarkModeToggle;
