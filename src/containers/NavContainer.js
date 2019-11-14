import Nav from "../components/nav/Nav";
import { connect } from "react-redux";
import filterTodoList from "../actions/filterTodoListAction";

// const mapStateToProps = state => {
//   return {
//     todos: state.todos.todoList
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    filterTodoList: filter => dispatch(filterTodoList(filter))
  };
};

export default connect(null, mapDispatchToProps)(Nav);
