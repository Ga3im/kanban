import { Card } from "../Card/Card";
import * as S from "./Column.styled.js";

export const Column = ({ title, card }) => {
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
