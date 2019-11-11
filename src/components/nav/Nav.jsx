import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="todo-nav">
      <NavLink exact className="todo-nav__item" to="/">
        Todos
      </NavLink>
      <NavLink exact className="todo-nav__item" to="/add">
        Add Todo
      </NavLink>
      <NavLink exact className="todo-nav__item" to="/completed">
        Show Completed
      </NavLink>
    </nav>
  );
};

export default Nav;
