const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "great" },
    { id: "2", title: "help me find food", content: "somethin" },
    { id: "3", title: "help me find grape", content: "great" }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
