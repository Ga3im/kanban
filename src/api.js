const baseUrl = "https://wedev-api.sky.pro/api/kanban";

const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export const getCards = async () => {
  return await fetch(baseUrl, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("Ошибка");
      }
      return res;
    })
    .then((res) => {
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
  })
    .then((res) => {
      if (res.status === 400) {
        throw new Error('error');
        
      }
      return res;
    })
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log(error.message));
};

export const login = async ({ login, password }) => {
  return await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("Ошибка");
      }
      return res;
    })
    .then((res) => {
      return res.json();
    });
};
