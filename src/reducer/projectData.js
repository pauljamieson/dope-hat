const initalState = {
  name: "",
  _id: "",
  isLeader: false,
};

const projectDataReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_PROJECT_DATA":
      return { ...action.payload };
    default:
      return state;
  }
};

export default projectDataReducer;
