import React from "react";
import PropTypes from "prop-types";
import "./Todo.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  duedate: PropTypes.string
};

const Todo = ({ title, description, duedate }) => {
  return (
    <div className="todo-container">
      <div className="todo-title">{title}</div>
      <div className="todo-duedate">
        {" "}
        {duedate ? `Due Date: ${duedate}` : ""}
      </div>
      <div className="todo-description">Description: {description}</div>
    </div>
  );
};

Todo.propTypes = propTypes;

export default Todo;
