import React from "react";
import axios from "axios";
import "./AddTodo.scss";
import TodoForm from "../todoForm/TodoForm";

const AddTodo = () => {
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

    console.log("todoDetails", todoDetails);

    axios
      .post("http://localhost:3001/api/todos/add", todoDetails)
      .then(res => console.log(res.data));
  };

  return <TodoForm onHandleSubmit={handleSubmit} />;
};

export default AddTodo;
