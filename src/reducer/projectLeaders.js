const initalState = {
  members: [],
  _id: "",
};

const projectLeadersReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_PROJECT_LEADERS":
      return { ...action.payload };
    default:
      return state;
  }
};

export default projectLeadersReducer;
