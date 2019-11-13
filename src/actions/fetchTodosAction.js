import axios from "axios";

const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosBegins());
    return axios
      .get("http://localhost:3001/api/todos")
      .then(res => {
        dispatch(fetchTodosSuccess(res.data));
        return res.data;
      })
      .catch(err => {
        fetchTodosError(err);
        console.log("err", err);
      });
  };
};

export const fetchTodosBegins = () => {
  return {
    type: "FETCH_TODOS_BEGINS"
  };
};

export const fetchTodosSuccess = todoList => {
  return {
    type: "FETCH_TODOS_SUCCESS",
    todoList
  };
};

export const fetchTodosError = error => {
  return {
    type: "FETCH_TODOS_ERROR",
    error
  };
};

export default fetchTodos;
