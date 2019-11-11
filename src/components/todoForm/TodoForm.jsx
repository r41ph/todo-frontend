import React from "react";
import Datetime from "react-datetime";
import moment from "moment";
import "./TodoForm.scss";

const TodoForm = props => {
  const { todos } = props;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [datetime, setDatetime] = React.useState("");
  const [todoId, setTodoId] = React.useState();

  // If the request comes from /update/:id
  // fill out the form fields.
  React.useEffect(() => {
    if (props.match) {
      const { id } = props.match.params;
      setTodoId(id);
    }
    if (todoId && todos.length > 0) {
      const todo = todos.find(todo => todo._id === todoId);
      setTitle(todo.todo_title);
      setDescription(todo.todo_description);
      setDatetime(moment(todo.todo_duedate).format("D/M/Y h:mm A"));
    }
  }, [todoId, todos, props.match]);

  const handleChange = event => {
    const target = event.target;
    if (target.localName === "input") {
      setTitle(target.value);
    } else {
      setDescription(target.value);
    }
  };

  const handleSubmit = () => {
    props.onHandleSubmit(title, description, datetime, todoId);
  };

  const handleDatetime = time => {
    setDatetime(time);
  };

  // Disable all dates before today and pass it to <Datetime />
  const yesterday = Datetime.moment().subtract(24, "hours");
  const validDate = function(current) {
    return current.isAfter(yesterday);
  };

  return (
    <form>
      <div className="">
        <label>Title: </label>
        <input type="text" className="" value={title} onChange={handleChange} />
      </div>
      <div className="">
        <label>Description: </label>
        <textarea
          className=""
          value={description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="">
        <label>Due date: </label>
        <Datetime
          onChange={handleDatetime}
          isValidDate={validDate}
          value={datetime === "Invalid date" ? "Set due date" : datetime}
        />
      </div>
      <div className="">
        <button type="button" onClick={handleSubmit} className="">
          {todoId ? "Update Todo" : "Add Todo"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
