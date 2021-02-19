export const setUser = (username, displayName, session, projects) => {
  return {
    type: "SET_USER",
    payload: {
      username: username,
      display_name: displayName,
      session: session,
      projects: projects,
    },
  };
};

export const clearUser = () => {
  return {
    type: "SET_USER",
    payload: {
      username: "",
      display_name: "",
      session: "",
      projects: [],
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
