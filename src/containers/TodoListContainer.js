import { connect } from "react-redux";
import TodoList from "../components/todoList/TodoList";
import deleteTodo from "../actions/deleteTodoAction";
import updateTodo from "../actions/updateTodoAction";

const mapStateToProps = state => {
  return {
    todos: state.todos.todoList,
    filter: state.filterTodoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id)),
    updateTodo: todo => dispatch(updateTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
