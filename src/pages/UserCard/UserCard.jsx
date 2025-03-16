import { useNavigate, useParams } from "react-router-dom";
import * as S from "./UserCard.styled.js";
import { Router } from "../routes.js";
import { useEffect, useState } from "react";
import { getUserTasks, deleteTask } from "../../api.js";
import { useUserContext } from "../../context/UserContext.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { statusList } from "../../components/Main/Main.jsx";
import { categories } from "../CreateCard/CreateCard.jsx";

export const UserCard = ({ task, setTask, setSelected, setCard }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [selectStatus, setSelectStatus] = useState(task.status);
  const [selectCat, setSelectCat] = useState(task.topic);
  const { user } = useUserContext(null);
  const [edit, setEdit] = useState({
    title: "Новая задача 2!",
    topic: "Research",
    status: "Без статуса",
    description: "Подробное описание задачи",
    date: "2024-01-07T16:26:18.179Z",
  });

  let { cardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserTasks(cardId, user.token)
      .then((res) => {
        setTask(res.task);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const closeUserCard = () => {
    navigate(Router.main);
  };

  const editCard = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const onSelectStatus = (status) => {
    setSelectStatus(status);
  };

  const deleteButton = () => {
    deleteTask(cardId, user.token).then((res) => {
      setCard(res.tasks);
      navigate(Router.main);
    });
  };

  return (
    <S.Browse>
      <S.Container>
        <S.Block>
          <S.Content>
            <S.TopBlock>
              <S.Title>{task.title}</S.Title>
              <S.Categories $topic={task.topic}>
                <p>{task.topic}</p>
              </S.Categories>
            </S.TopBlock>
            <S.Status>
              <S.StatusP>Статус</S.StatusP>
              <S.StatusThemes>
                {isEdit ? (
                  <>
                    {statusList.map((i) => {
                      return (
                        <S.StatusTheme
                          key={i}
                          $selectStatus={selectStatus === i}
                          onClick={() => onSelectStatus(i)}
                        >
                          <p>{i}</p>
                        </S.StatusTheme>
                      );
                    })}
                  </>
                ) : (
                  <S.StatusTheme $status={task.status}>
                    <p>{task.status}</p>
                  </S.StatusTheme>
                )}
              </S.StatusThemes>
            </S.Status>
            <S.Wrap>
              <S.Form action="#">
                <S.FormBlock>
                  <S.Label htmlFor="textArea01">Описание задачи</S.Label>
                  <S.TextArea
                    onChange={(e) => setDescriptionText(e.target.value)}
                    name="text"
                    readOnly={isEdit ? false : true}
                    placeholder="Введите описание задачи..."
                  ></S.TextArea>
                </S.FormBlock>
              </S.Form>
              <Calendar
                selected={task.date ? task.date : new Date()}
                setSelected={setSelected}
              />
            </S.Wrap>
            <S.ThemeDown>
              <S.Cat>Категория</S.Cat>
              {isEdit ? (
                categories.map((i) => {
                  return (
                    <S.Categories
                      key={i}
                      onClick={() => setSelectCat(i)}
                      $selectCat={selectCat === i}
                      $topic={i}
                    >
                      <p>{i}</p>
                    </S.Categories>
                  );
                })
              ) : (
                <S.Categories $selectCat={task.topic} $topic={task.topic}>
                  <p>{task.topic}</p>
                </S.Categories>
              )}
            </S.ThemeDown>

            {isEdit ? (
              <S.BtnBrowse>
                <S.BtnGroup>
                  <S.CloseButton className="btn-edit__edit _btn-bg _hover01">
                    Сохранить
                  </S.CloseButton>
                  <S.Button onClick={cancelEdit}>Отменить</S.Button>
                  <S.Button onClick={deleteButton}>Удалить задачу</S.Button>
                </S.BtnGroup>
                <S.CloseButton onClick={closeUserCard}>Закрыть</S.CloseButton>
              </S.BtnBrowse>
            ) : (
              <S.BtnBrowse>
                <S.BtnGroup>
                  <S.Button onClick={editCard}>Редактировать задачу</S.Button>
                  <S.Button onClick={deleteButton}>Удалить задачу</S.Button>
                </S.BtnGroup>
                <S.CloseButton onClick={closeUserCard}>Закрыть</S.CloseButton>
              </S.BtnBrowse>
            )}
          </S.Content>
        </S.Block>
      </S.Container>
      ;
    </S.Browse>
  );
};
