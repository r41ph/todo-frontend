import { connect } from "react-redux";
import TodoList from "../components/todoList/TodoList";
import deleteTodo from "../actions/deleteTodoAction";

const mapStateToProps = state => {
  return {
    todos: state.todos.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
