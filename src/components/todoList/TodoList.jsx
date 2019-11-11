import React from "react";
import "./TodoList.scss";
import moment from "moment";
import Todo from "../todo/Todo";
import Message from "../message/Message";

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

  const renderTodos = () => {
    const todosList = todos.reduce((acc, todo) => {
      if (todo.todo_completed === false) {
        acc.push(
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
        );
      }
      return acc;
    }, []);

    return todosList.length > 0 ? (
      todosList
    ) : (
      <Message message="There are no TODOs!" />
    );
  };

  return (
    <div className="todos-container">
      {todos.length > 0 ? renderTodos() : "Loading"}
    </div>
  );
};

export default TodoList;
