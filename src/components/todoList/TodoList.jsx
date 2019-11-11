import React from "react";
// import axios from "axios";
import "./TodoList.scss";
import moment from "moment";
import Todo from "../todo/Todo";

const TodoList = ({ todos = [] }) => (
  <div className="todo-container">
    {todos.length > 0
      ? todos.map(todo => (
          <Todo
            key={todo._id}
            id={todo._id}
            title={todo.todo_title}
            description={todo.todo_description}
            duedate={
              todo.todo_duedate !== ""
                ? moment(todo.todo_duedate).format("dddd, Do MMMM YYYY, h:mm a")
                : ""
            }
          />
        ))
      : "Loading"}
  </div>
);

export default TodoList;
