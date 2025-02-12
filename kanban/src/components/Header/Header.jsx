import { useState } from "react";
import { cardList } from "../../data";
import * as S from './Header.styled.js'

export const Header = ({ card = { card }, setCard = { setCard } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleAddCard = () => {
    setCard(
      cardList.push({
        id: cardList.length + 1,
        date: "12.02.25",
        topic: "Web",
        title: "Название",
        status: "Без статуса",
      })
    );
  };

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          <S.Logo src="/public/logo.png" alt="logo">
          </S.Logo>
          <div className="header__logo _dark">
              <img src="/public/logo_dark.png" alt="logo" />
          </div>
          <S.Nav>
            <S.AddButton
              onClick={handleAddCard}
              id="btnMainNew"
            >
              {/* <a href="#popNewCard">Создать новую задачу</a> */}
              Создать новую задачу
            </S.AddButton>
            <S.User $isOpen={isOpen} onClick={handleOpen} >
              Ivan Ivanov
            </S.User>
            {isOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.Nav>
        </S.Block>
      </S.Container>
    </S.Header>
  );
};
