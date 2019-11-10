import React from "react";
import axios from "axios";
import "./TodoList.scss";
import moment from "moment";
import Todo from "../todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:3001/api/todos")
      .then(res => setTodos(res.data))
      .catch(err => console.log("err", err));
  }, []);

  return (
    <div className="todo-container">
      {todos.length > 0
        ? todos.map(todo => (
            <Todo
              key={todo._id}
              title={todo.todo_title}
              description={todo.todo_description}
              duedate={
                todo.todo_duedate !== ""
                  ? moment(todo.todo_duedate).format(
                      "dddd, Do MMMM YYYY, h:mm:ss a"
                    )
                  : ""
              }
            />
          ))
        : "Loading"}
    </div>
  );
};

export default TodoList;
