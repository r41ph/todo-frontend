import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Todo.scss";
import Button from "../button/Button";

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  duedate: PropTypes.string
};

const Todo = ({ id, title, description, duedate }) => {
  return (
    <div className="todo-container">
      <div className="todo-toggle">
        <div className="todo-title">{title}</div>
        <div className="todo-options">
          <Button>
            <Link to={`/update/${id}`}>Edit</Link>
          </Button>
        </div>
        <div className="todo-duedate">
          {duedate ? `Due Date: ${duedate}` : ""}
        </div>
      </div>
      <div className="todo-description">Description: {description}</div>
    </div>
  );
};

Todo.propTypes = propTypes;

export default Todo;
