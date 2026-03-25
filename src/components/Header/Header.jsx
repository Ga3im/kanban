import { useRef, useState } from "react";
import * as S from "./Header.styled.js";
import { useNavigate } from "react-router-dom";
import { Router } from "../../pages/routes.js";
import { useOutsideClick } from "../../hooks/useCloseModal.js";

export const Header = ({ isAuth, theme, setTheme }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const popUserRef = useRef();
  const popUserBtnRef = useRef();

  const handleLogoClick = () => {
    navigate(Router.main);
  };

  const handleAddCard = () => {
    navigate(Router.CreateCard);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNightTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleArchiveClick = () => {
    navigate(Router.archive);
    setIsOpen(false);
  };

  const closePopUser = () => {
    setIsOpen(false);
  };

  useOutsideClick(popUserRef, popUserBtnRef, closePopUser);

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          <svg
            onClick={handleLogoClick}
            width="50"
            height="50"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="8"
              stroke="#E2E8F0"
              stroke-width="4"
            />
            <line
              x1="36"
              y1="15"
              x2="36"
              y2="85"
              stroke="#E2E8F0"
              stroke-width="4"
            />
            <line
              x1="63"
              y1="15"
              x2="63"
              y2="85"
              stroke="#E2E8F0"
              stroke-width="4"
            />
            <rect x="16" y="22" width="14" height="10" rx="2" fill="#94A3B8" />
            <rect x="42" y="35" width="14" height="10" rx="2" fill="#3B82F6" />
            <rect x="69" y="50" width="14" height="10" rx="2" fill="#10B981" />
          </svg>
          <S.AddButtonMobile onClick={handleAddCard}>
            <S.AddButtonMobileVer />
            <S.AddButtonMobileHor />
          </S.AddButtonMobile>

          <S.Nav>
            <S.AddButton onClick={handleAddCard}>
              Создать новую задачу
            </S.AddButton>

            <S.MenuIcon ref={popUserBtnRef} onClick={handleOpen}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org"
              >
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 6H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </S.MenuIcon>

            {isOpen && (
              <S.PopUserSet ref={popUserRef} id="user-set-target">
                <S.Archive onClick={handleArchiveClick}>Архив задач</S.Archive>

                <S.PopUserTheme>
                  <p>Темная тема</p>
                  <input
                    type="checkbox"
                    name="checkbox"
                    onClick={handleNightTheme}
                  />
                </S.PopUserTheme>
              </S.PopUserSet>
            )}
          </S.Nav>
        </S.Block>
      </S.Container>
    </S.Header>
  );
};
