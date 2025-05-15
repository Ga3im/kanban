import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export const useUserContext = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("Данные пользователя не найдены");
  }
  return user;
};
