const filterTodoList = filterType => {
  return {
    type: "FILTER_TODO_LIST",
    filterType
  };
};

export default filterTodoList;
