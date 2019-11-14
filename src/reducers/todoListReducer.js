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
      const todosAfterDelete = state.todoList.filter(
        todo => todo._id !== action.id
      );
      return {
        ...state,
        todoList: todosAfterDelete
      };

    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.todo]
      };

    case "UPDATE_TODO":
      const todosAfterUpdate = state.todoList.map(todo =>
        todo._id === action.todo._id ? action.todo : todo
      );

      return {
        ...state,
        todoList: todosAfterUpdate
      };

    default:
      return state;
  }
}
