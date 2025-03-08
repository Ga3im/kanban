import * as S from "./Register.styled.js";
import { Router } from "../routes.js";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../api.js";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext.jsx";

export const Register = ({ setIsAuth }) => {
  const [loginInput, setLoginInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);
  let navigate = useNavigate();
  const { updateUser } = useUserContext();

  const goToLogin = (e) => {
    e.preventDefault();
    navigate(Router.login);
  };

  const enterRegiser = (e) => {
    e.preventDefault();
    setLoad(true);
    register({
      name: nameInput,
      login: loginInput,
      password: passwordInput,
    })
      .then((res) => {
        login({
          login: res.login,
          password: res.password,
        });
        return res;
      })
      .then((res) => {
        updateUser(res.user);
        setLoad(false);
        setIsAuth(true);
        navigate(Router.main);
        setNameInput("");
        setLoginInput("");
        setPasswordInput("");
      })
      .catch((error) => {
        setErr(error.message);
        setLoad(false);
      });
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
              <S.Error>{err}</S.Error>
              {load ? (
                <S.Buttonload disabled>Загрузка...</S.Buttonload>
              ) : (
                <S.Button onClick={enterRegiser}>Зарегистрироваться</S.Button>
              )}
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
