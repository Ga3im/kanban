import { Card } from "../Card/Card";
import * as S from "./Column.styled.js";

export const Column = ({ title, cardList }) => {
  return (
    <S.MainColumn>
      <S.Title>
        <p>{title}</p>
      </S.Title>
      {cardList.map((i) => (
        <Card key={i.id} card={i} />
      ))}
    </S.MainColumn>
  );
};


