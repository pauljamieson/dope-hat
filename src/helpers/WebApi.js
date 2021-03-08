const APIURL =
  process.env.REACT_APP_ENV === "PRD"
    ? "https://dope-hat-api.herokuapp.com"
    : "http://192.168.0.120:9000";

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

export const getUser = (username) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/user";
    url.searchParams.set("username", username);
    fetch(url, {
      method: "GET",
      headers: { session: localStorage.getItem("session") },
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/user/byId";
    url.searchParams.set("id", id);
    fetch(url, {
      method: "GET",
      headers: { session: localStorage.getItem("session") },
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
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        session: localStorage.getItem("session"),
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const getProject = (projectId) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/project";
    url.searchParams.set("project_id", projectId);
    fetch(url, {
      method: "GET",
      headers: {
        session: localStorage.getItem("session"),
      },
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/project/all";
    fetch(url, {
      method: "GET",
      headers: {
        session: localStorage.getItem("session"),
      },
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};
export const getAllDisplayNames = () => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/user/allDisplayNames";
    fetch(url, {
      method: "GET",
      headers: {
        session: localStorage.getItem("session"),
      },
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const isProjectLeader = (projectId) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/project/isLeader";
    url.searchParams.set("project_id", projectId);
    fetch(url, {
      method: "GET",
      headers: {
        session: localStorage.getItem("session"),
      },
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const addProjectMembers = (projectId, type, members) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/project/members";
    const body = {
      project_id: projectId,
      type: type,
      members: members,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        session: localStorage.getItem("session"),
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const removeProjectMembers = (projectId, type, members) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/project/members";
    const body = {
      project_id: projectId,
      type: type,
      members: members,
    };
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        session: localStorage.getItem("session"),
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const leaveProject = (projectId, userId) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/project/leave";
    const body = {
      project_id: projectId,
    };
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        session: localStorage.getItem("session"),
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const deleteProject = (projectId) => {
  return new Promise((resolve, reject) => {
    const url = new URL(APIURL);
    url.pathname = "/project";
    const body = {
      project_id: projectId,
    };
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        session: localStorage.getItem("session"),
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};
