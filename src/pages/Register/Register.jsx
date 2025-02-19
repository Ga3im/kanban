import * as S from "./Register.styled.js";
import { Router } from "../routes.js";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  let navigate = useNavigate()

  const goToLogin = (e) => {
    e.preventDefault();
    navigate(Router.login);
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
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.Input
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.Input
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.Button id="SignUpEnter">Зарегистрироваться</S.Button>
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
