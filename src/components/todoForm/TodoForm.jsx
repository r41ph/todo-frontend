import React from "react";
import Datetime from "react-datetime";
import moment from "moment";
import "./TodoForm.scss";
import Button from "../button/Button";
import Message from "../message/Message";

const TodoForm = props => {
  const { todos } = props;
  const isTodoUpdate = props.match;
  const [todoId, setTodoId] = React.useState();
  const [todoDetails, setTodoDetails] = React.useState({
    title: "",
    description: "",
    datetime: ""
  });
  const [message, setMessage] = React.useState("");

  // If the request comes from /update/:id
  // fill out the form fields.
  React.useEffect(() => {
    if (isTodoUpdate) {
      const { id } = props.match.params;
      setTodoId(id);
    }
    if (todoId && todos.length > 0) {
      const todo = todos.find(todo => todo._id === todoId);
      if (todo) {
        setTodoDetails({
          title: todo.todo_title,
          description: todo.todo_description,
          datetime: moment(todo.todo_duedate).format("M/D/Y h:mm A")
        });
      }
    }
  }, [isTodoUpdate, todoId, todos, props.match]);

  const handleChange = event => {
    const target = event.target;
    if (target.localName === "input") {
      setTodoDetails({
        title: target.value,
        description: todoDetails.description,
        datetime: todoDetails.datetime
      });
    } else {
      setTodoDetails({
        title: todoDetails.title,
        description: target.value,
        datetime: todoDetails.datetime
      });
    }
  };

  const handleSubmit = () => {
    props.onHandleSubmit(
      todoDetails.title,
      todoDetails.description,
      todoDetails.datetime,
      todoId
    );

    const messageTxt = isTodoUpdate ? "Todo Updated!" : "Todo Added!";
    setMessage(messageTxt);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleDatetime = time => {
    setTodoDetails({
      title: todoDetails.title,
      description: todoDetails.description,
      datetime: time
    });
  };

  // Disable all dates before today and pass it to <Datetime />
  const yesterday = Datetime.moment().subtract(24, "hours");
  const validDate = function(current) {
    return current.isAfter(yesterday);
  };

  return (
    <>
      <form className="todo-form">
        <h2>{todoId ? "Update Todo" : "Add new TODO"}</h2>
        <div className="todo-form__field">
          <label className="todo-form__label">Title: </label>
          <input
            type="text"
            className=""
            value={todoDetails.title}
            onChange={handleChange}
          />
        </div>
        <div className="todo-form__field">
          <label className="todo-form__label">Description: </label>
          <textarea
            className=""
            value={todoDetails.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="todo-form__field">
          <label className="todo-form__label">Due date: </label>
          <Datetime
            onChange={handleDatetime}
            isValidDate={validDate}
            value={
              todoDetails.datetime === "Invalid date"
                ? "Set due date"
                : todoDetails.datetime
            }
          />
        </div>
        <div className="todo-form__field">
          <Button handleClick={handleSubmit} className="todo-button__form">
            {todoId ? "Update Todo" : "Add Todo"}
          </Button>
        </div>
      </form>
      {message ? <Message message={message} /> : ""}
    </>
  );
};

export default TodoForm;
