import { useNavigate } from "react-router-dom";
import * as S from "./Exit.styled.js";
import { Router } from "../routes.js";
import { useUserContext } from "../../context/UserContext.jsx";

export const Exit = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const { updateUser } = useUserContext();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setIsAuth(false);
    updateUser(null);
    navigate(Router.login);
  };

  const cancel = (e) => {
    e.preventDefault();
    navigate(Router.main);
  };

  return (
    <S.Exit>
      <S.Container>
        <S.Block>
          <S.Title>
            <h2>Выйти из аккаунта?</h2>
          </S.Title>
          <form action="#">
            <S.Group>
              <S.YesButton onClick={logout}>Да, выйти</S.YesButton>
              <S.NoButton onClick={cancel}>Нет, остаться</S.NoButton>
            </S.Group>
          </form>
        </S.Block>
      </S.Container>
    </S.Exit>
  );
};
