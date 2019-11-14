import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import fetchTodos from "./actions/fetchTodosAction";
// import UpdateTodo from "./components/updateTodo/UpdateTodo";
import Header from "./components/header/Header";
import TodoListCompleted from "./components/todoListCompleted/TodoListCompleted";
import Loading from "./components/loading/Loading";
import TodoListContainer from "./containers/TodoListContainer";
import AddTodoContainer from "./containers/AddTodoContainer";
import UpdateTodoContainer from "./containers/UpdateTodoContainer";

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
          <TodoListContainer />
        </Route>
        <Route path="/add">
          <AddTodoContainer />
        </Route>
        <Route
          path="/update/:id"
          render={props => <UpdateTodoContainer {...props} />}
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
