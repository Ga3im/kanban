import { createContext, useContext } from "react";

export const CardContext = createContext(null);

export const useCardContext = () => {
  const card = useContext(CardContext);
  if (!card) {
    throw new Error("Данные карт не были найдены");
  }
  return card;
};
