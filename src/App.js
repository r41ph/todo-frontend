import React from "react";
import "./App.scss";
import TodoForm from "./components/todoForm/TodoForm";
import { Switch, Route } from "react-router-dom";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="todos-container">
      <Switch>
        <Route path="/" exact>
          <TodoList />
        </Route>
        <Route path="/add">
          <TodoForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
