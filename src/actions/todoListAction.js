import axios from "axios";

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodoListBegins());
    return axios
      .get("http://localhost:3001/api/todos")
      .then(res => {
        dispatch(fetchTodoListSuccess(res.data));
        return res.data;
      })
      .catch(err => {
        fetchTodoListError(err);
        console.log("err", err);
      });
  };
};

export const fetchTodoListBegins = () => {
  console.log("begins");
  return {
    type: "FETCH_TODO_LIST_BEGINS"
  };
};

export const fetchTodoListSuccess = todoList => {
  return {
    type: "FETCH_TODO_LIST_SUCCESS",
    payload: todoList
  };
};

export const fetchTodoListError = error => {
  return {
    type: "FETCH_TODO_LIST_ERROR",
    payload: error
  };
};
