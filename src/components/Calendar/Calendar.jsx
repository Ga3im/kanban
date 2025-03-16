import * as S from "./Calendar.styled";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

export function Calendar({ selected, setSelected }) {
  return (
    <>
      <S.CalPos>
        <S.Date>Дата</S.Date>
        <S.StyledDayPicker
          mode="single"
          weekStartsOn={1}
          selected={selected}
          onSelect={setSelected}
        />
        <S.P>
          Выберите срок исполнения:
          <div>
            {new Date(selected) >= new Date() - new Date(24 * 3600 * 1000) ? (
              format(selected, "dd.MM.yyyy")
            ) : (
              <p>{format(selected, "dd.MM.yyyy")}</p>
            )}
          </div>
        </S.P>
      </S.CalPos>
    </>
  );
}
