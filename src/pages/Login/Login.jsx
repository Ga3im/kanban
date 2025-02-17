import * as S from './Login.styled.js'
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
                class="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.Button class="modal__btn-enter _hover01" id="btnEnter">
                Войти
              </S.Button>
              <S.ModalGroup>
                <p>Нужно зарегистрироваться?</p>
                <a href="signup.html">Регистрируйтесь здесь</a>
              </S.ModalGroup>
            </S.Form>
          </S.BlockModal>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
};
