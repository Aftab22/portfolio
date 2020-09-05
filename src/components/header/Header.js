import React, { Component } from "react";
import DarkModeToggle from "./darkModeToggle/DarkModeToggle";
import Title from "./title/Title";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <DarkModeToggle />
        <Title />
      </>
    );
  }
}

export default Header;
