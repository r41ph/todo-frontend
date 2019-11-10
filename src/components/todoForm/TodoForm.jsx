import React from "react";
import axios from "axios";
import Datetime from "react-datetime";
import "./TodoForm.scss";

const TodoForm = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [datetime, setDatetime] = React.useState("");

  const handleChange = event => {
    const target = event.target;
    if (target.localName === "input") {
      setTitle(target.value);
    } else {
      setDescription(target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (title === "") {
      return;
    }

    const newTodo = {
      todo_title: title,
      todo_description: description,
      todo_duedate: datetime,
      todo_completed: false
    };

    axios
      .post("http://localhost:3001/api/todos/add", newTodo)
      .then(res => console.log(res.data));
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
        <Datetime onChange={handleDatetime} isValidDate={validDate} />
      </div>
      <div className="">
        <button onClick={handleSubmit} className="">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
