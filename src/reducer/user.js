const initalState = {
  username: "",
  session_id: "",
  display_name: "",
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
