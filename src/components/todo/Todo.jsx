import React from "react";
import PropTypes from "prop-types";
import "./Todo.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

const Todo = ({ title, description }) => {
  return (
    <div className="todo-container">
      <div className="todo-title">{title}</div>
      <div className="todo-description">{description}</div>
    </div>
  );
};

Todo.propTypes = propTypes;

export default Todo;
