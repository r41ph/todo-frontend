const initialState = {
  todoList: [],
  loading: false,
  error: null
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TODOS_BEGINS":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        loading: false,
        todoList: action.todoList
      };

    case "FETCH_TODOS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        todoList: []
      };

    default:
      return state;
  }
}
