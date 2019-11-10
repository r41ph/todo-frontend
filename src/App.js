import React from "react";
import "./App.scss";
import TodoForm from "./components/todoForm/TodoForm";

function App() {
  return (
    <div className="todo-container">
      <TodoForm />
    </div>
  );
}

export default App;
