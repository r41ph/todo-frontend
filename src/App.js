import React from "react";
import "./App.scss";
import TodoForm from "./components/todoForm/TodoForm";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="todo-container">
      <Switch>
        <Route path="/" exact>
          <h1>HOME</h1>
        </Route>
        <Route path="/add">
          <TodoForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
