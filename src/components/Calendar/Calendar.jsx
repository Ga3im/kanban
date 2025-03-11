import * as S from "./Calendar.styled";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { useState } from "react";

export function Calendar({ date }) {

  const [selected, setSelected] = useState(date ? date : new Date());

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
            {new Date(selected) >= new Date() ? (
              format(selected, "dd.MM.yyyy")
            ) : (
              <p>{format(localStorage.getItem('date'), "dd.MM.yyyy")}</p>
            )}
          </div>
        </S.P>
      </S.CalPos>
    </>
  );
}
