import { useEffect, useState } from "react";
import { cardList } from "../../data";
import { Column } from "../Column/Column";
import * as S from "./Main.styled.js";
import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  GlobalStyle,
  lightTheme,
  Wrapper,
} from "../../Global.styled.js";
import { Header } from "../Header/Header.styled.js";

export const Main = ({setCard}) => {
  const [isloading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("light");
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header setCard={setCard} theme={theme} setTheme={setTheme} />

        <S.Main>
          <S.Container>
            {isloading ? (
              <p>Loading</p>
            ) : (
              <S.Block>
                <S.Content>
                  {statusList.map((status) => (
                    <Column
                      key={status}
                      title={status}
                      cardList={cardList.filter((i) => i.status === status)}
                    />
                  ))}
                </S.Content>
              </S.Block>
            )}
          </S.Container>
        </S.Main>
      </Wrapper>
    </ThemeProvider>
  );
};
