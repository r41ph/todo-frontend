import React from "react";
import "./TodoList.scss";
import moment from "moment";
import Todo from "../todo/Todo";

const TodoList = ({ todos = [], updateTodos }) => {
  const onDeleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo._id !== id);
    updateTodos(updatedTodos);
  };
  const onUpdateTodoStatus = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo => {
      return todo._id === id ? updatedTodo.data : todo;
    });
    updateTodos(updatedTodos);
  };

  return (
    <div className="todos-container">
      {todos.length > 0
        ? todos.map(todo =>
            todo.todo_completed !== true ? (
              <Todo
                key={todo._id}
                id={todo._id}
                title={todo.todo_title}
                description={todo.todo_description}
                duedate={
                  todo.todo_duedate !== ""
                    ? moment(todo.todo_duedate).format("M/D/Y h:mm A")
                    : ""
                }
                completed={todo.todo_completed}
                deleteTodo={onDeleteTodo}
                updateStatus={onUpdateTodoStatus}
              />
            ) : (
              ""
            )
          )
        : "Loading"}
    </div>
  );
};

export default TodoList;
