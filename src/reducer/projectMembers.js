const initalState = {
  members: [],
  _id: "",
};

const projectMembersReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_PROJECT_MEMBERS":
      return { ...action.payload };
    default:
      return state;
  }
};

export default projectMembersReducer;
