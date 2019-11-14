import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./AddTodo.scss";
import TodoForm from "../todoForm/TodoForm";
import Message from "../message/Message";

const propTypes = {
  todos: PropTypes.array,
  updateTodos: PropTypes.func
};

const AddTodo = ({ todos, addTodo }) => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = (title, description, datetime) => {
    if (title === "") {
      setMessage("Title is mandatory");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }

    const todoDetails = {
      todo_title: title,
      todo_description: description,
      todo_duedate: datetime,
      todo_completed: false
    };

    axios
      .post("http://localhost:3001/api/todos/add", todoDetails)
      .then(res => {
        addTodo(res.data);
        setMessage("Todo added");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      })
      .catch(error => {
        setMessage(error.response);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      });
  };

  return (
    <>
      <TodoForm onHandleSubmit={handleSubmit} />
      {message ? <Message message={message} /> : ""}
    </>
  );
};

AddTodo.propTypes = propTypes;

export default AddTodo;
