import React from "react";
import axios from "axios";
import "./TodoList.scss";

function TodoList() {
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
        ? todos.map(todo => <div key="{todo._id}">{todo.todo_title}</div>)
        : "Loading"}
    </div>
  );
}

export default TodoList;
