import { useNavigate } from "react-router-dom";
import * as S from "./CreateCard.styled.js";
import { Router } from "../routes.js";
import { useState } from "react";
import { addTask } from "../../api.js";
import { useUserContext } from "../../context/UserContext.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { statusList } from "../../components/Main/Main.jsx";

export const categories = ["Web Design", "Research", "Copywriting"];

export const CreateCard = ({ setCard, selected, setSelected }) => {
  const [add, setAdd] = useState({
    title: "Новая задача",
    topic: "Research",
    status: "Без статуса",
    description: " ",
    date: new Date(),
  });
  const navigate = useNavigate();
  const { user } = useUserContext();

  const closeCreatPage = () => {
    navigate(Router.main);
  };

  const onSelectStatus = (i) => {
    console.log(i);
    setAdd({ ...add, status: i });
  };

  const catCheck = (i) => {
    setAdd({ ...add, topic: i });
  };

  const addNewCArd = () => {
    addTask(user.token, add)
      .then((res) => {
        setCard(res.tasks);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate(Router.main);
  };

  return (
    <S.Card>
      <S.Container>
        <S.Block>
          <S.Content>
            <S.Title>Создание задачи</S.Title>
            <S.Close onClick={closeCreatPage}>&#10006;</S.Close>
            <S.Status>
              <S.StatusP>Статус</S.StatusP>
              <S.StatusThemes>
                {statusList.map((i) => {
                  return (
                    <S.StatusTheme
                      key={i}
                      $selectStatus={i}
                      onClick={() => onSelectStatus(i)}
                    >
                      <p>{i}</p>
                    </S.StatusTheme>
                  );
                })}
              </S.StatusThemes>
            </S.Status>
            <S.Wrap>
              <S.Form action="#">
                <S.FormBlock>
                  <S.Label>Название задачи</S.Label>
                  <S.Input
                    onChange={(e) => setAdd({ ...add, title: e.target.value })}
                    type="text"
                    name="name"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.Label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </S.Label>
                  <S.TextArea
                    onChange={(e) =>
                      setAdd({ ...add, description: e.target.value })
                    }
                    name="text"
                    placeholder="Введите описание задачи..."
                  ></S.TextArea>
                </S.FormBlock>
              </S.Form>
              <Calendar selected={selected} setSelected={setSelected} />
            </S.Wrap>
            <S.Categorios>
              <S.CatTitle>Категория</S.CatTitle>
              <S.CatThemes>
                {categories.map((i) => (
                  <S.CatTheme onClick={() => catCheck(i)} $cat={i} key={i}>
                    <p>{i}</p>
                  </S.CatTheme>
                ))}
              </S.CatThemes>
            </S.Categorios>
            <S.Button onClick={addNewCArd}>Создать задачу</S.Button>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.Card>
  );
};
