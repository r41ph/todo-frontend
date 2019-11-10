import React from "react";
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
