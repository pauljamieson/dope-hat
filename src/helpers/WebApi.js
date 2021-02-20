const APIURL =
  process.env.NODE_ENV === "development"
    ? "http://192.168.0.120:9000"
    : "https://dope-hat-api.herokuapp.com";

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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => {
        if (resp.headers.get("Session"))
          localStorage.setItem("session", resp.headers.get("Session"));
        return resp.json();
      })
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const autoLogin = (session) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/login/auto";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        session: session,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/logout";
    fetch(url, { method: "GET", credentials: "include" })
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

export const getUserById = (id, username, sessionId) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/user/byId";
    url.searchParams.set("id", id);
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
    };
    console.log(username);
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

export const getProject = (projectId, username, sessionId) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/project";
    url.searchParams.set("project_id", projectId);
    fetch(url, {
      method: "GET",
      headers: { username: username, session_id: sessionId },
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};
