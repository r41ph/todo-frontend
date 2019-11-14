import { combineReducers } from "redux";
import todos from "./todoListReducer";
import filterTodoList from "./filterTodoListReducer";

export default combineReducers({
  todos,
  filterTodoList
});
