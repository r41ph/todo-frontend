import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import "./Todo.scss";
import Button from "../button/Button";

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  duedate: PropTypes.string,
  deleteTodo: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired
};

const Todo = ({
  id,
  title,
  description,
  duedate,
  deleteTodo,
  updateStatus
}) => {
  const onDelete = () => {
    axios
      .post(`http://localhost:3001/api/todos/delete/${id}`)
      .then(res => {
        deleteTodo(id);
      })
      .catch(err => console.log("error deleting todo: ", err));
  };

  const onCompleted = () => {
    console.log("moment(duedate)", moment(duedate));
    console.log("duedate", typeof duedate);
    const date = moment(duedate).format("M/D/Y h:mm A");
    const todoCompleted = {
      todo_title: title,
      todo_description: description,
      todo_duedate: date,
      todo_completed: true
    };

    axios
      .post(`http://localhost:3001/api/todos/update/${id}`, todoCompleted)
      .then(res => {
        updateStatus(id, res);
      });
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
          <Button handleClick={onCompleted}>Complete</Button>
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
