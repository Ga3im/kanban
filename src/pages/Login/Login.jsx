import { useNavigate } from "react-router-dom";
import * as S from "./Login.styled.js";
import { Router } from "../routes.js";
import { getCards, login } from "../../api.js";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext.jsx";

export const Login = ({ setIsAuth, setCard }) => {
  const [loginInput, setLoginInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const [isload, setIsLoad] = useState(false);
  const { updateUser } = useUserContext();

  const goToRegister = (e) => {
    e.preventDefault();
    navigate(Router.register);
  };

  const enterLogin = () => {
    setIsLoad(true);
    login({
      login: loginInput,
      password: passwordInput,
    })
      .then((res) => {
        updateUser(res.user);
        localStorage.setItem("user", JSON.stringify(res.user));
        setIsLoad(false);
        setIsAuth(true);
        navigate(Router.main);
      })
      .catch((error) => {
        setErr(error.message);
        setIsLoad(false);
      });
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
              <S.Error>{err}</S.Error>
              {isload ? (
                <S.Buttonload disabled>Загрузка...</S.Buttonload>
              ) : (
                <S.Button onClick={enterLogin}>Войти</S.Button>
              )}

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
