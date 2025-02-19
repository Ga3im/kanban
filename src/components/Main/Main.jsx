import { useEffect, useState } from "react";
import { cardList } from "../../data";
import { Column } from "../Column/Column";
import * as S from "./Main.styled.js";
import { Outlet } from "react-router-dom";

export const Main = () => {
  const [isloading, setIsLoading] = useState(true);
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
    }, 500);
  }, []);
  return (
    <S.Main>
      <Outlet/>
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
    
  );
};
