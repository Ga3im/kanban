import * as S from "./Exit.styled.js";
export const Exit = () => {
  return (
    <S.Exit id="popExit">
      <S.Container>
        <S.Block>
          <S.Title>
            <h2>Выйти из аккаунта?</h2>
          </S.Title>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.Group>
              <S.YesButton id="exitYes">Да, выйти</S.YesButton>
              <S.NoButton id="exitNo">Нет, остаться</S.NoButton>
            </S.Group>
          </form>
        </S.Block>
      </S.Container>
    </S.Exit>
  );
};
