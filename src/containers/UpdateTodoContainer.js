import UpdateTodo from "../components/updateTodo/UpdateTodo";
import { connect } from "react-redux";
import updateTodo from "../actions/updateTodoAction";

const mapStateToProps = state => {
  return {
    todos: state.todos.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTodo: todo => dispatch(updateTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTodo);
