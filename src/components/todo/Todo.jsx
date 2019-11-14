import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import "./Todo.scss";
import Button from "../button/Button";

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  duedate: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired
};

const Todo = ({
  id,
  title,
  description,
  duedate,
  deleteTodo,
  completed,
  updateStatus
}) => {
  const [isDescVisible, setIsDescVisible] = React.useState(false);
  const onDelete = () => {
    axios
      .post(`http://localhost:3001/api/todos/delete/${id}`)
      .then(res => {
        deleteTodo(id);
      })
      .catch(err => console.log("error deleting todo: ", err));
  };

  const onCompleted = () => {
    const todoCompleted = {
      todo_title: title,
      todo_description: description,
      todo_duedate: moment(duedate).format("M/D/Y h:mm A"),
      todo_completed: !completed
    };

    axios
      .post(`http://localhost:3001/api/todos/update/${id}`, todoCompleted)
      .then(res => {
        updateStatus(res.data);
      });
  };

  const onToggleDescription = event => {
    if (event.target.className !== "todo-toggle") {
      return;
    }
    setIsDescVisible(!isDescVisible);
  };

  const overdue = moment().unix() > moment(duedate).unix();
  const closeToEndTime = moment().isAfter(moment(duedate).subtract(1, "hours"));

  return (
    <div className={`todo-container ${overdue ? "overdue" : ""}`}>
      <div className="todo-toggle" onClick={e => onToggleDescription(e)}>
        <div className="todo-title">{title}</div>
        <div className="todo-options">
          {!completed ? (
            <Button>
              <Link to={`/update/${id}`}>Edit</Link>
            </Button>
          ) : (
            ""
          )}
          <Button handleClick={onDelete}>Delete</Button>
          <Button handleClick={onCompleted}>
            {!completed ? "Complete" : "Open"}
          </Button>
          <div className={`todo-duedate ${closeToEndTime ? "overdue" : ""}`}>
            {duedate ? duedate : ""}
          </div>
        </div>
      </div>
      <div
        className={`todo-description ${
          isDescVisible ? "todo-description__open" : ""
        }`}
      >
        {description}
      </div>
    </div>
  );
};

Todo.propTypes = propTypes;

export default Todo;
