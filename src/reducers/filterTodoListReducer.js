export default function filterList(state = "uncompleted", action) {
  switch (action.type) {
    case "FILTER_TODO_LIST":
      return action.filterType;

    default:
      return state;
  }
}
