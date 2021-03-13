const initalState = {
  open: false,
  message: "",
};

const snackbarReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_SNACKBAR":
      return { ...action.payload };
    default:
      return state;
  }
};

export default snackbarReducer;
