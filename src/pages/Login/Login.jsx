import { useNavigate } from "react-router-dom";
import * as S from "./Login.styled.js";
import { Router } from "../routes.js";
import { login } from "../../api.js";
import { useState } from "react";
export const Login = ({ setIsAuth }) => {
  const [loginInput, setLoginInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const navigate = useNavigate();

  const goToRegister = (e) => {
    e.preventDefault();
    navigate(Router.register);
  };

  const enterLogin = (e) => {
    e.preventDefault();
    login({
      login: loginInput,
      password: passwordInput,
    });
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
              <S.Input
                type="text"
                onChange={(e) => setLoginInput(e.target.value)}
                name="login"
                placeholder="Эл. почта"
              />
              <S.Input
                type="password"
                onChange={(e) => setPasswordInput(e.target.value)}
                name="password"
                placeholder="Пароль"
              />
              <S.Button onClick={enterLogin}>Войти</S.Button>
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
