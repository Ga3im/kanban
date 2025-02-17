import { useNavigate } from "react-router-dom";
import * as S from "./Exit.styled.js";

export const Exit = () => {
  const navigate = useNavigate();
  const logout = (e)=>{
    e.preventDefault();
    navigate('/login');
  }
  const cancel = (e)=>{
    e.preventDefault();
    navigate('/');
  }
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
