import React from "react";
import "./TodoListCompleted.scss";
import moment from "moment";
import Todo from "../todo/Todo";
import Message from "../message/Message";

const TodoListCompleted = ({ todos = [], updateTodos }) => {
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

  const renderCompleted = () => {
    const completed = todos.reduce((acc, todo) => {
      if (todo.todo_completed === true) {
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

    return completed.length > 0 ? (
      completed
    ) : (
      <Message message="No completed TODOs" />
    );
  };

  return (
    <div className="todos-container todos-container__completed">
      {todos.length > 0 ? renderCompleted() : "Loading"}
    </div>
  );
};

export default TodoListCompleted;
