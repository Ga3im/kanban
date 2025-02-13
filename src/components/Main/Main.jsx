import { useEffect, useState } from "react";
import { cardList } from "../../data";
import { Column } from "../Column/Column";
import * as S from './Main.styled.js'

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
    }, 2000);
  }, []);
  return (
    <main className="main">
      <S.Container className="container">
        {isloading ? (
          <p>Loading</p>
        ) : (
          <div className="main__block">
            <div className="main__content">
              {statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardList={cardList.filter((i) => i.status === status)}
                />
              ))}
            </div>
          </div>
        )}
      </S.Container>
    </main>
  );
};
