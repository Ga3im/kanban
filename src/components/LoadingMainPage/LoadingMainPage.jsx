import { statusList } from "../Main/Main.jsx";
import * as S from "./LoadingMainPage.module.js";

export const LoadingMainPage = () => {
  return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => {
              return (
                <S.MainColumn key={status}>
                  <S.ColumnTitle>
                    <p>{status}</p>
                  </S.ColumnTitle>
                  {statusList.map((id) => (
                    <S.Cards key={id}>
                      <S.CardItem>
                        <S.Card>
                          <S.CardGroup>
                            <S.Loader1></S.Loader1>
                            <S.Loader2></S.Loader2>
                          </S.CardGroup>
                          <S.CardContent>
                            <S.Loader3></S.Loader3>
                            <S.CardDate>
                              <S.Loader4></S.Loader4>
                            </S.CardDate>
                          </S.CardContent>
                        </S.Card>
                      </S.CardItem>
                    </S.Cards>
                  ))}
                </S.MainColumn>
              );
            })}
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
};
