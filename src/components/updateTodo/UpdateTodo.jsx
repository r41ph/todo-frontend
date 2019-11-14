import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./UpdateTodo.scss";
import TodoForm from "../todoForm/TodoForm";

const propTypes = {
  todos: PropTypes.any.isRequired,
  updateTodo: PropTypes.func.isRequired
};

const UpdateTodo = props => {
  const { updateTodo } = props;

  const handleSubmit = (title, description, datetime, id) => {
    if (title === "") {
      return;
    }
    const todoDetails = {
      todo_title: title,
      todo_description: description,
      todo_duedate: datetime,
      todo_completed: false
    };
    axios
      .post(`http://localhost:3001/api/todos/update/${id}`, todoDetails)
      .then(res => {
        updateTodo(res.data);
      });
  };

  return (
    <>
      <TodoForm onHandleSubmit={handleSubmit} {...props} />
    </>
  );
};

UpdateTodo.propTypes = propTypes;

export default UpdateTodo;
