import { useSelector } from "react-redux";
import { Column } from "../Column/Column";
import * as S from "./Main.styled.js";
import { Outlet } from "react-router-dom";

export const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Готово",
];

export const Main = ({ err, setErr }) => {
  const { cards } = useSelector((state) => state.cards);

  return (
    <S.Main>
      <Outlet />
      <S.Container>
        {err ? (
          <S.Error>
            {err === "Failed to fetch" ? "Нет подключеня к интернету" : err}
          </S.Error>
        ) : (
          <S.Block>
            <S.Content>
              {statusList.map((status) => (
                <Column
                  setErr={setErr}
                  key={status}
                  title={status}
                  card={cards.filter(
                    (i) => i.status === status && !i.archivedDate
                  )}
                />
              ))}
            </S.Content>
          </S.Block>
        )}
      </S.Container>
      <Outlet />
    </S.Main>
  );
};
