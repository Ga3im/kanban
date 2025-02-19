import { useNavigate } from "react-router-dom";
import * as S from "./Login.styled.js";
import { Router } from "../routes.js";
export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const goToRegister = (e) => {
    e.preventDefault();
    navigate(Router.register);
  };

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate(Router.main);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.BlockModal>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            <S.Form action="#">
              <S.Input type="text" name="login" placeholder="Эл. почта" />
              <S.Input type="password" name="password" placeholder="Пароль" />
              <S.Button onClick={login}>Войти</S.Button>
              <S.ModalGroup>
                <p>Нужно зарегистрироваться?</p>
                <span onClick={goToRegister}>Регистрируйтесь здесь</span>
              </S.ModalGroup>
            </S.Form>
          </S.BlockModal>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
};
