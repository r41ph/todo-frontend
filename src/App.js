import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
// import TodoList from "./components/todoList/TodoList";
import AddTodo from "./components/addTodo/AddTodo";
import UpdateTodo from "./components/updateTodo/UpdateTodo";
import Header from "./components/header/Header";
import TodoListCompleted from "./components/todoListCompleted/TodoListCompleted";
import Loading from "./components/loading/Loading";
import ContainerTodoList from "./containers/ContainerTodoList";
import fetchTodos from "./actions/fetchTodosAction";

function App({ fetchTodos, todos, loading, error }) {
  React.useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const updateTodoList = updatedList => {
    // setTodos(updatedList);
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="todos">
      <Header heading="todo list app" />
      <Switch>
        <Route path="/" exact>
          {/* <TodoList todos={todos} updateTodos={updateTodoList} /> */}
          <ContainerTodoList />
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

const mapStateToProps = state => ({
  todos: state.todos.todoList,
  loading: state.todos.loading,
  error: state.todos.error
});

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch(fetchTodos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
