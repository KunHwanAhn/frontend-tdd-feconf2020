const initialState = {
  tasks: [],
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  if (action.type === 'setTasks') {
    const { tasks } = action.payload;

    return {
      ...state,
      tasks,
    };
  }

  if (action.type === 'deleteTask') {
    const { id } = action.payload;

    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== id),
    };
  }

  return state;
}
