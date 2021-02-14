const APIURL = "http://192.168.0.120:9000"; //"https://dope-hat-api.herokuapp.com";

export const signup = (username, displayName, password, email) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/user";
    const body = {
      username: username,
      display_name: displayName,
      password: password,
      email: email,
    };
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/login";
    const body = {
      username: username,
      password: password,
    };
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const getUser = (username, sessionId) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/user";
    url.searchParams.set("username", username);
    fetch(url, {
      method: "GET",
      headers: { username: username, session_id: sessionId },
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const createProject = (projectName, username, sessionId) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/project";
    const body = {
      project_name: projectName,
      username: username,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        username: username,
        session_id: sessionId,
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};
