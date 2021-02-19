const initalState = {
  username: "",
  display_name: "",
  session: "",
  projects: [String],
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload, projects: [...action.payload.projects] };
    default:
      return state;
  }
};

export default userReducer;
