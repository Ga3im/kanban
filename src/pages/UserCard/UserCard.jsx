import { useNavigate, useParams } from "react-router-dom";
import * as S from "./UserCard.styled.js";
import { Router } from "../routes.js";
import { useEffect, useState } from "react";
import { getUserTask, deleteTask, editTask, getCards } from "../../api.js";
import { useUserContext } from "../../context/UserContext.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { statusList } from "../../components/Main/Main.jsx";
import { categories } from "../CreateCard/CreateCard.jsx";

export const UserCard = ({ task, setTask, setSelected, selected, setCard }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useUserContext(null);
  let { cardId } = useParams();
  const navigate = useNavigate();
  const [edit, setEdit] = useState({});

  useEffect(() => {
    getUserTask(cardId, user.token)
      .then((res) => {
        setTask(res.task);
        setSelected(res.task.date);
        setEdit({
          ...edit,
          title: res.task.title,
          topic: res.task.topic,
          status: res.task.status,
          description: res.task.description,
          date: res.task.date,
        });
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

  const saveEditButton = () => {
    editTask(cardId, user.token, { ...edit }).then((res) => {
      getCards(user.token).then((res) => {
        setCard(res.tasks);
      });
      setIsEdit(false);
    });
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    setIsEdit(false);
    setEdit({
      ...edit,
      title: task.title,
      topic: task.topic,
      status: task.status,
      description: task.description,
      date: task.date,
    });
  };

  const onSelectStatus = (i) => {
    setEdit({ ...edit, status: i });
  };

  const selectCat = (i) => {
    setEdit({ ...edit, topic: i });
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
              <S.Categories $color={task.topic} $selectCat={task.topic}>
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
                          $selectStatus={edit.status === i}
                          onClick={() => onSelectStatus(i)}
                        >
                          <p>{i}</p>
                        </S.StatusTheme>
                      );
                    })}
                  </>
                ) : (
                  <S.StatusTheme $selectStatus={task.status}>
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
                    onChange={(e) =>
                      setEdit({ ...edit, description: e.target.value })
                    }
                    placeholder="Введите описание задачи..."
                    value={edit.description}
                    readOnly={isEdit ? false : true}
                  ></S.TextArea>
                </S.FormBlock>
              </S.Form>
              <Calendar selected={selected} setSelected={setSelected} />
            </S.Wrap>
            <S.ThemeDown>
              <S.Cat>Категория</S.Cat>
              {isEdit ? (
                categories.map((i) => {
                  return (
                    <S.Categories
                      key={i}
                      $selectCat={edit.topic === i}
                      $color={i}
                      onClick={() => selectCat(i)}
                    >
                      <p>{i}</p>
                    </S.Categories>
                  );
                })
              ) : (
                <S.Categories $color={task.topic} $selectCat={task.topic}>
                  <p>{task.topic}</p>
                </S.Categories>
              )}
            </S.ThemeDown>

            {isEdit ? (
              <S.BtnBrowse>
                <S.BtnGroup>
                  <S.CloseButton onClick={saveEditButton}>
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
