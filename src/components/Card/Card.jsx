import { useNavigate } from "react-router-dom";
import * as S from "./Card.styled.js";
import { useState } from "react";
import { format } from "date-fns";

export const Card = ({ card }) => {
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(null);

  const dragStart = () => {
    setCurrentCard(card);
  };

  const dragEnd = (e) => {
    e.preventDefault();
    console.log("dragEnd");
  };

  const dragOver = () => {
    console.log("Over");
  };

  const dragLeave = () => {
    console.log("dragLeave");
  };

  const openUserCard = (e) => {
    e.preventDefault();
    navigate(`/card/${card._id}`);
  };

  return (
    <S.Cards>
      <S.CardItem>
        <S.CardsCard
          onClick={openUserCard}
          draggable
          onDragStart={dragStart}
          onDragEnd={dragEnd}
          onDragOver={dragOver}
          onDragLeave={dragLeave}
        >
          <S.Group>
            <S.CardTheme $color={card.topic}>
              <p>{card.topic}</p>
            </S.CardTheme>
            <S.CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </S.CardBtn>
          </S.Group>
          <S.Content>
            <S.Title>{card.title}</S.Title>
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
                  <clipPath id="clip0_1_415">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>{format(card.date, "dd.MM.yyyy")}</p>
            </S.Date>
          </S.Content>
        </S.CardsCard>
      </S.CardItem>
    </S.Cards>
  );
};
