import * as S from "./Login.styled.js";
export const Login = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.BlockModal>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            <S.Form id="formLogIn" action="#">
              <S.Input
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.Input
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.Button id="btnEnter">Войти</S.Button>
              <S.ModalGroup>
                <p>Нужно зарегистрироваться?</p>
                <span>Регистрируйтесь здесь</span>
              </S.ModalGroup>
            </S.Form>
          </S.BlockModal>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
};
