import React from "react";
import Nav from "../nav/Nav";

const Header = ({ heading }) => {
  return (
    <header>
      <div>{heading}</div>
      <Nav />
    </header>
  );
};

export default Header;
