import { useRef, useState } from "react";
import * as S from "./Header.styled.js";
import { useNavigate } from "react-router-dom";
import { Router } from "../../pages/routes.js";
import { useUserContext } from "../../context/UserContext.jsx";
import { useOutsideClick } from "../../hooks/useCloseModal.js";

export const Header = ({ isAuth, theme, setTheme }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();
  const popUserRef = useRef();
  const popUserBtnRef = useRef();

  const userInfo = user
    ? {
        name: user.name,
        login: user.login,
        img: user.imageUrl,
      }
    : null;

  const handleOpen = () => {
    setIsOpen(!isOpen);
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

  const closePopUser = () => {
    setIsOpen(false);
  };

  useOutsideClick(popUserRef, popUserBtnRef, closePopUser);

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          <svg
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
          {isAuth ? (
            <S.Nav>
              <S.AddButton onClick={handleAddCard}>
                Создать новую задачу
              </S.AddButton>

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                  fill="currentColor"
                />
                <path
                  d="M6 19C6 16.2386 8.23858 14 11 14H13C15.7614 14 18 16.2386 18 19V20H6V19Z"
                  fill="currentColor"
                />
              </svg>
              <S.User $isOpen={isOpen} onClick={handleOpen}>
                {/* {userInfo.name} */}
              </S.User>
              {isOpen && (
                <S.PopUserSet ref={popUserRef} id="user-set-target">
                  {/* <S.UserName>{userInfo.name}</S.UserName> */}
                  {/* <S.UserMail>{userInfo.login}</S.UserMail> */}
                  <S.PopUserTheme ref={popUserBtnRef}>
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      name="checkbox"
                      onClick={handleNightTheme}
                    />
                  </S.PopUserTheme>
                  {/* <S.PopUserExitBtn type="button" onClick={Exit}>
                    Выйти
                  </S.PopUserExitBtn> */}
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
