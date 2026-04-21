import { Outlet, useNavigate } from "react-router-dom";
import * as S from "./ArchiveCards.styled";
import { Router } from "../routes";
import { useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";

export const ArchiveCards = () => {
  const navigate = useNavigate();
  const { cards } = useSelector((state) => state.cards);

  const handleBackBtn = () => {
    navigate(Router.main);
  };

  const doneCards = cards.filter(
    (c) => c.status === "Готово" && c.completedDate && c.archivedDate
  );

  const deletedCards = cards.filter(
    (c) => c.archivedDate && c.status !== "Готово"
  );

  return (
    <S.Main>
      <S.BackBtn onClick={handleBackBtn}>← Назад</S.BackBtn>
      <S.Title>Архив</S.Title>
      {doneCards.length > 0 && (
        <S.CardContent>
          <p>Завершенные</p>
          {doneCards.map((c) => (
            <Card key={c._id} card={c} />
          ))}
        </S.CardContent>
      )}
      {deletedCards.length > 0 && (
        <S.CardContent>
          <p>Удаленные</p>
          {deletedCards.map((c) => (
            <Card key={c._id} card={c} />
          ))}
        </S.CardContent>
      )}
      <Outlet />
    </S.Main>
  );
};
