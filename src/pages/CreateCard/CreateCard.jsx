import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CreateCard.styled";
import { statusList } from "../../components/Main/Main";
import { Calendar } from "../../components/Calendar/Calendar";
import { useDispatch } from "react-redux";
import { addCard } from "../../store/cardsSlice";
import { Router } from "../routes";

export const CreateCard = ({ selected, setSelected }) => {
  const [add, setAdd] = useState({
    _id: crypto.randomUUID(),
    title: "",
    status: "Без статуса",
    description: "",
    date: new Date(),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setAdd((prev) => ({ ...prev, date: selected }));
  }, [selected]);

  const closeCreatPage = () => navigate(Router.main);

  const onSelectStatus = (i) => setAdd({ ...add, status: i });

  const addNewCard = () => {
    dispatch(addCard(add));
    navigate(Router.main);
  };

  return (
    <S.Card>
      <S.Container>
        <S.Block>
          <S.Content>
            <S.TopBlock>
              <S.Title>Создание задачи</S.Title>
              <S.Close onClick={closeCreatPage}>✖</S.Close>
            </S.TopBlock>

            <S.Status>
              <S.StatusP>Статус</S.StatusP>
              <S.StatusThemes>
                {statusList.map((i) => (
                  <S.StatusTheme
                    key={i}
                    $selectStatus={i === add.status}
                    onClick={() => onSelectStatus(i)}
                  >
                    <p>{i}</p>
                  </S.StatusTheme>
                ))}
              </S.StatusThemes>
            </S.Status>

            <S.Wrap>
              <S.Form>
                <S.FormBlock>
                  <S.Label>Название задачи</S.Label>
                  <S.Input
                    onChange={(e) => setAdd({ ...add, title: e.target.value })}
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.Label>Описание задачи</S.Label>
                  <S.TextArea
                    rows={5}
                    onChange={(e) =>
                      setAdd({ ...add, description: e.target.value })
                    }
                    placeholder="Введите описание задачи..."
                  />
                </S.FormBlock>
              </S.Form>
              <S.CalendarWrapper>
                <Calendar selected={selected} setSelected={setSelected} />
              </S.CalendarWrapper>
            </S.Wrap>

            <S.BtnGroup>
              <S.Button onClick={addNewCard}>Создать задачу</S.Button>
            </S.BtnGroup>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.Card>
  );
};
