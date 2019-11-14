import AddTodo from "../components/addTodo/AddTodo";
import { connect } from "react-redux";
import addTodo from "../actions/addTodoAction";

const mapStateToProps = state => {
  return {
    todos: state.todos.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
