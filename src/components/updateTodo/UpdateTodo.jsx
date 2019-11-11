import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./UpdateTodo.scss";
import TodoForm from "../todoForm/TodoForm";

const propTypes = {
  todos: PropTypes.any.isRequired,
  updateTodos: PropTypes.func.isRequired
};

const UpdateTodo = props => {
  const { updateTodos, todos } = props;
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
        const updatedTodos = todos.map(todo => {
          return todo._id === id ? res.data : todo;
        });
        updateTodos(updatedTodos);
      });
  };

  return <TodoForm onHandleSubmit={handleSubmit} {...props} />;
};

UpdateTodo.propTypes = propTypes;

export default UpdateTodo;
