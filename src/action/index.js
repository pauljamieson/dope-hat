export const setUser = (username, displayName, session, projects) => {
  return {
    type: "SET_USER",
    payload: {
      username: username,
      display_name: displayName,
    },
  };
};

export const clearUser = () => {
  return {
    type: "SET_USER",
    payload: {
      username: "",
      display_name: "",
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
