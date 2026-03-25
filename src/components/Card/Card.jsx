import { useNavigate } from "react-router-dom";
import * as S from "./Card.styled.js";
import { setDraggedColumn, setSelectedCard } from "../../store/cardsSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { format } from "date-fns";

export const Card = ({ card }) => {
  const [isDragging, setIsDragging] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dragStart = (e) => {
    e.dataTransfer.setData("cardId", card._id);
    dispatch(setDraggedColumn(card.status));
    setTimeout(() => setIsDragging(true), 0);
  };

  const dragEnd = () => {
    setIsDragging(false);
    dispatch(setDraggedColumn(null));
  };

  const openUserCard = (e) => {
    e.preventDefault();
    dispatch(setSelectedCard(card));
    navigate(`card/${card._id}`);
  };

  return (
    <S.Cards>
      <S.CardItem>
        <S.CardsCard
          onClick={openUserCard}
          draggable
          onDragEnd={dragEnd}
          onDragStart={dragStart}
          style={{
            opacity: isDragging ? 0.5 : 1,
            border: isDragging ? "2px dashed #94A6BE" : "none",
          }}
        >
          <S.Group>
            <S.Title>{card.title}</S.Title>
            <S.CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </S.CardBtn>
          </S.Group>
          <S.CardMain>
            <S.CardDescription>{card.description}</S.CardDescription>
            <S.Date>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <g clipPath="url(#clip0_1_415)">
                  <path
                    d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath _id="clip0_1_415">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p> {format(new Date(card.date), "dd.MM.yyyy")}</p>
            </S.Date>
          </S.CardMain>
        </S.CardsCard>
      </S.CardItem>
    </S.Cards>
  );
};
