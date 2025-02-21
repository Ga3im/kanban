import { useEffect } from "react";
import { getCards } from "../../api.js";
import { Card } from "../Card/Card";
import * as S from "./Column.styled.js";

export const Column = ({ title, card, setCard }) => {
  useEffect(() => {
    getCards().then((tasks) => {
      console.log(tasks.tasks);
      setCard(tasks.tasks);
    });
  }, []);

  return (
    <S.MainColumn>
      <S.Title>
        <p>{title}</p>
      </S.Title>
      {card.map((i) => (
        <Card key={i._id} card={i} />
      ))}
    </S.MainColumn>
  );
};
