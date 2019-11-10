import React from "react";
import axios from "axios";
import "./Todo.scss";

const Todo = ({ title, description }) => {
  return (
    <div className="todo-container">
      <div className="todo-title">{title}</div>
      <div className="todo-description">{description}</div>
    </div>
  );
};

export default Todo;
