import React from "react";
import "./Header.scss";
import NavContainer from "../../containers/NavContainer";

const Header = ({ heading }) => {
  return (
    <header className="todo-header">
      <h1 className="todo-header__heading">{heading}</h1>
      <NavContainer />
    </header>
  );
};

export default Header;
