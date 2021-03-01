const initalState = {
  username: "",
  display_name: "",
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
