import React from "react";
import axios from "axios";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import TodoList from "./components/todoList/TodoList";
import AddTodo from "./components/addTodo/AddTodo";
import UpdateTodo from "./components/updateTodo/UpdateTodo";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/api/todos")
      .then(res => setTodos(res.data))
      .catch(err => console.log("err", err));
  }, []);

  return (
    <div className="todos-container">
      <Switch>
        <Route path="/" exact>
          <TodoList todos={todos} />
        </Route>
        <Route path="/add">
          <AddTodo />
        </Route>
        <Route
          path="/update/:id"
          render={props => <UpdateTodo {...props} todos={todos} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
