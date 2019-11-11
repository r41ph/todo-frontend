import React from "react";
import axios from "axios";
import "./UpdateTodo.scss";
import TodoForm from "../todoForm/TodoForm";

const UpdateTodo = props => {
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

    console.log("todoDetails", todoDetails);

    axios
      .post(`http://localhost:3001/api/todos/update/${id}`, todoDetails)
      .then(res => console.log(res.data));
  };

  return <TodoForm onHandleSubmit={handleSubmit} {...props} />;
};

export default UpdateTodo;
