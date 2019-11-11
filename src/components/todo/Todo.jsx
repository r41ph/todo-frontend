import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Todo.scss";
import Button from "../button/Button";

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  duedate: PropTypes.string
};

const Todo = ({ id, title, description, duedate, updateTodos }) => {
  const onDelete = () => {
    axios
      .post(`http://localhost:3001/api/todos/delete/${id}`)
      .then(res => {
        updateTodos(id);
      })
      .catch(err => console.log("error deleting todo: ", err));
  };

  return (
    <div className="todo-container">
      <div className="todo-toggle">
        <div className="todo-title">{title}</div>
        <div className="todo-options">
          <Button>
            <Link to={`/update/${id}`}>Edit</Link>
          </Button>
          <Button handleClick={onDelete}>Delete</Button>
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
