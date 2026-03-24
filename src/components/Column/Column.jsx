import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import * as S from "./Column.styled.js";
import { setDraggedColumn, updateCardStatus } from "../../store/cardsSlice.js";
import { useState } from "react";

export const Column = ({ title, card }) => {
  const [isOver, setIsOver] = useState(false);
  const dispatch = useDispatch();
  const { draggedColumn } = useSelector((state) => state.cards);

  const showPlaceholder = draggedColumn !== null && draggedColumn !== title;

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    setIsOver(true);
  };

  const onDragLeave = () => {
    setIsOver(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOver(false);
    const cardId = e.dataTransfer.getData("cardId");
    if (cardId) {
      dispatch(updateCardStatus({ _id: cardId, newStatus: title }));
    }
    dispatch(setDraggedColumn(null));
  };

  return (
    <S.MainColumn
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      style={{
        backgroundColor: isOver ? "rgba(148, 166, 190, 0.1)" : "transparent",
        border: isOver ? "2px solid #94A6BE" : "2px solid transparent",
        borderRadius: "8px",
        transition: "all 0.2s ease",
      }}
    >
      <S.Title>
        <p>{title}</p>
      </S.Title>
      {card.map((i) => (
        <Card key={i._id} card={i} />
      ))}
      {showPlaceholder && (
        <S.EmptyCardPlaceholder>Перетащите сюда</S.EmptyCardPlaceholder>
      )}
    </S.MainColumn>
  );
};
