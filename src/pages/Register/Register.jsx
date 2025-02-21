import * as S from "./Register.styled.js";
import { Router } from "../routes.js";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../api.js";
import { useState } from "react";

export const Register = () => {
  const [loginInput, setLoginInput] = useState();
  const [nameInput, setNameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [error, setError] = useState();
  let navigate = useNavigate();
  console.log(nameInput);
  const goToLogin = (e) => {
    e.preventDefault();
    navigate(Router.login);
  };

  const enterRegiser = (e) => {
    e.preventDefault();
    try {
      register({
        name: nameInput,
        login: loginInput,
        password: passwordInput,
      })
        .then(() => {     
          setNameInput("");
          setLoginInput("");
          setPasswordInput("");
           login({
            login: loginInput,
            password: passwordInput,
          });
        })
        .then(() => navigate(Router.main));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.BlockModal>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.Form id="formLogUp" action="#">
              <S.Input
                onChange={(e) => setNameInput(e.target.value)}
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.Input
                onChange={(e) => setLoginInput(e.target.value)}
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.Input
                onChange={(e) => setPasswordInput(e.target.value)}
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              {error && <p>{error}</p>}
              <S.Button onClick={enterRegiser}>Зарегистрироваться</S.Button>
              <S.ModalGroup>
                <p>
                  Уже есть аккаунт?{" "}
                  <span onClick={goToLogin}> Войдите здесь</span>
                </p>
              </S.ModalGroup>
            </S.Form>
          </S.BlockModal>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
};
