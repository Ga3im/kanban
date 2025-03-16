const baseUrl = "https://wedev-api.sky.pro/api/kanban";

export const getCards = async (token) => {
  return await fetch(baseUrl, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => {
    if (res.status !== 200) {
      throw new Error("Не удалось получить данные");
    }
    return res.json();
  });
};

export const register = async ({ login, name, password }) => {
  return await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  }).then((res) => {
    if (res.status === 400) {
      if (name === "") {
        throw new Error("Введите имя");
      }
      if (login === "") {
        throw new Error("Введите логин");
      }
      if (password === "") {
        throw new Error("Введите пароль");
      }
      throw new Error("Пользователь с таким логином существует");
    }
    return res.json();
  });
};

export const login = async ({ login, password }) => {
  return await fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((res) => {
    if (res.status === 400) {
      if (login === "") {
        throw new Error("Введите логин");
      }
      if (password === "") {
        throw new Error("Введите пароль");
      }
      throw new Error("Передан неправильный логин или пароль");
    }
    return res.json();
  });
};

export const getUserTasks = async (id, token) => {
  return await fetch(`${baseUrl}/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.json();
  });
};

export const addTask = async (
  token,
  title,
  topic,
  status,
  description,
  date
) => {
  return await fetch(`https://wedev-api.sky.pro/api/kanban`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(title, topic, status, description, date),
  }).then((res) => {
    console.log(res);
    return res.json();
  });
};

export const deleteTask = async (id, token) => {
  return await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => {
    return res.json();
  });
};
