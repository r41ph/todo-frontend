const initialState = {
  todoList: [],
  loading: false,
  error: null
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TODO_LIST_BEGINS":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "FETCH_TODO_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        todoList: action.payload
      };

    case "FETCH_TODO_LIST_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        todoList: []
      };

    default:
      return state;
  }
}
