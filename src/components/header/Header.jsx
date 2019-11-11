import React from "react";
import Nav from "../nav/Nav";
import "./Header.scss";

const Header = ({ heading }) => {
  return (
    <header className="todo-header">
      <h1 className="todo-header__heading">{heading}</h1>
      <Nav />
    </header>
  );
};

export default Header;
