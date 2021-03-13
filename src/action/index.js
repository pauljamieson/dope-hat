export const setUser = (username, displayName, _id) => {
  return {
    type: "SET_USER",
    payload: {
      username: username,
      display_name: displayName,
      _id: _id,
    },
  };
};

export const clearUser = () => {
  return {
    type: "SET_USER",
    payload: {
      username: "",
      display_name: "",
      _id: "",
    },
  };
};

export const loggedIn = () => {
  return {
    type: "LOGIN",
  };
};

export const loggedOut = () => {
  return {
    type: "LOGOUT",
  };
};

export const setProjectData = (name, _id, isLeader) => {
  return {
    type: "SET_PROJECT_DATA",
    payload: {
      name: name,
      _id: _id,
      isLeader: isLeader,
    },
  };
};

export const clearProjectData = () => {
  return {
    type: "CLEAR_PROJECT_DATA",
    payload: {
      name: "",
      _id: "",
      isLeader: false,
    },
  };
};

export const setProjectLeaders = (leaders, _id) => {
  return {
    type: "SET_PROJECT_LEADERS",
    payload: {
      members: leaders,
      _id: _id,
    },
  };
};

export const clearProjectLeaders = () => {
  return {
    type: "CLEAR_PROJECT_LEADERS",
    payload: {
      members: [],
      _id: "",
    },
  };
};

export const setProjectMembers = (members, _id) => {
  return {
    type: "SET_PROJECT_MEMBERS",
    payload: {
      members: members,
      _id: _id,
    },
  };
};

export const clearProjectMembers = () => {
  return {
    type: "CLEAR_PROJECT_MEMBERS",
    payload: {
      members: [],
      _id: "",
    },
  };
};

export const setSnackbar = (open, message) => {
  return {
    type: "SET_SNACKBAR",
    payload: {
      open: open,
      message: message,
    },
  };
};
