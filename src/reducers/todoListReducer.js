const initialState = {
  todoList: [],
  loading: false,
  error: null
};

export default function fetchTodosReducer(state = initialState, action) {
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

    case "DELETE_TODO":
      const todos = state.todoList.filter(todo => todo._id !== action.id);
      return {
        ...state,
        todoList: todos
      };

    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todos, todo]
      };

    default:
      return state;
  }
}
