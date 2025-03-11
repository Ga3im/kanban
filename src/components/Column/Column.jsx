import { Card } from "../Card/Card";
import * as S from "./Column.styled.js";

export const Column = ({task, title, card }) => {
  return (
    <S.MainColumn>
      <S.Title>
        <p>{title}</p>
      </S.Title>
      {card.map((i) => (
        <Card task={task} key={i._id} card={i} />
      ))}
    </S.MainColumn>
  );
};
