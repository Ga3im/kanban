import { useState } from "react";
import * as S from "./Header.styled.js";
import { useNavigate } from "react-router-dom";
import { Router } from "../../pages/routes.js";

export const Header = ({ isAuth, theme, setTheme }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const Exit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate("/exit");
  };

  const handleAddCard = () => {
    navigate(Router.CreateCard);
  };

  const handleNightTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          {theme === "light" ? (
            <S.Logo src="/public/logo.png" alt="logo"></S.Logo>
          ) : (
            <S.Logo src="/public/logo_dark.png" alt="logo"></S.Logo>
          )}
          {isAuth ? (
            <S.Nav>
              <S.AddButton onClick={handleAddCard} id="btnMainNew">
                Создать новую задачу
              </S.AddButton>
              <S.User $isOpen={isOpen} onClick={handleOpen}>
                Ivan Ivanov
              </S.User>
              {isOpen && (
                <S.PopUserSet id="user-set-target">
                  <S.UserName>Ivan Ivanov</S.UserName>
                  <S.UserMail>ivan.ivanov@gmail.com</S.UserMail>
                  <S.PopUserTheme>
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      name="checkbox"
                      onClick={handleNightTheme}
                    />
                  </S.PopUserTheme>
                  <S.PopUserExitBtn type="button" onClick={Exit}>
                    Выйти
                  </S.PopUserExitBtn>
                </S.PopUserSet>
              )}
            </S.Nav>
          ) : (
            <S.PopUserTheme>
              <p>Темная тема</p>
              <input
                type="checkbox"
                name="checkbox"
                onClick={handleNightTheme}
              />
            </S.PopUserTheme>
          )}
        </S.Block>
      </S.Container>
    </S.Header>
  );
};
