import React from "react";
import "./TodoList.scss";
import moment from "moment";
import Todo from "../todo/Todo";
import Message from "../message/Message";

const TodoList = ({ todos = [], updateTodo, deleteTodo, filter }) => {
  const onDeleteTodo = id => {
    deleteTodo(id);
  };

  const onUpdateTodoStatus = updatedTodo => {
    updateTodo(updatedTodo);
  };

  const renderTodos = todoStatus => {
    let selectedFilter;

    const todosList = todos.reduce((acc, todo) => {
      switch (todoStatus) {
        case "all":
          selectedFilter = true;
          break;
        case "completed":
          selectedFilter = todo.todo_completed === true;
          break;
        case "uncompleted":
          selectedFilter = todo.todo_completed === false;
          break;
        default:
          selectedFilter = todo.todo_completed === false;
      }

      if (selectedFilter) {
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
      {todos.length > 0 ? renderTodos(filter) : "Loading"}
    </div>
  );
};

export default TodoList;
