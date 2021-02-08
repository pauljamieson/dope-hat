export const setUser = (username, displayName, sessionId, projects) => {
  return {
    type: "SET_USER",
    payload: {
      username: username,
      session_id: displayName,
      display_name: sessionId,
      projects: projects,
    },
  };
};

export const clearUser = () => {
  return {
    type: "SET_USER",
    payload: {
      username: "",
      session_id: "",
      display_name: "",
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
