import React from "react";
import axios from "axios";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import TodoList from "./components/todoList/TodoList";
import AddTodo from "./components/addTodo/AddTodo";
import UpdateTodo from "./components/updateTodo/UpdateTodo";
import Header from "./components/header/Header";
import TodoListCompleted from "./components/todoListCompleted/TodoListCompleted";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/api/todos")
      .then(res => setTodos(res.data))
      .catch(err => console.log("err", err));
  }, []);

  const updateTodoList = updatedList => {
    setTodos(updatedList);
  };

  return (
    <div className="todos">
      <Header heading="todo list app" />
      <Switch>
        <Route path="/" exact>
          <TodoList todos={todos} updateTodos={updateTodoList} />
        </Route>
        <Route path="/add">
          <AddTodo todos={todos} updateTodos={updateTodoList} />
        </Route>
        <Route
          path="/update/:id"
          render={props => (
            <UpdateTodo {...props} todos={todos} updateTodos={updateTodoList} />
          )}
        ></Route>
        <Route path="/completed">
          <TodoListCompleted todos={todos} updateTodos={updateTodoList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
