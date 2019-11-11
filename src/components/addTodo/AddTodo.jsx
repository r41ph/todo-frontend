import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./AddTodo.scss";
import TodoForm from "../todoForm/TodoForm";

const propTypes = {
  todos: PropTypes.array,
  updateTodos: PropTypes.func
};

const AddTodo = ({ todos, updateTodos }) => {
  const handleSubmit = (title, description, datetime) => {
    if (title === "") {
      return;
    }

    const todoDetails = {
      todo_title: title,
      todo_description: description,
      todo_duedate: datetime,
      todo_completed: false
    };

    axios.post("http://localhost:3001/api/todos/add", todoDetails).then(res => {
      updateTodos([...todos, res.data]);
    });
  };

  return <TodoForm onHandleSubmit={handleSubmit} />;
};

AddTodo.propTypes = propTypes;

export default AddTodo;
