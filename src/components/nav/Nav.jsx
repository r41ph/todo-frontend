import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ filterTodoList }) => {
  const handleChange = event => {
    console.log("event.target.value", event.target.value);
    filterTodoList(event.target.value);
  };

  return (
    <nav className="todo-nav">
      <NavLink exact className="todo-nav__item" to="/">
        Todos
      </NavLink>
      <NavLink exact className="todo-nav__item" to="/add">
        Add Todo
      </NavLink>
      {/* <NavLink exact className="todo-nav__item" to="/completed">
        Show Completed
      </NavLink> */}
      <select onChange={handleChange} name="todoStatus" id="todoStatus">
        <option value="uncompleted">Uncompleted</option>
        <option value="completed">Completed</option>
        <option value="all">All</option>
      </select>
    </nav>
  );
};

export default Nav;
