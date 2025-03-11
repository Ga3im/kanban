import { useNavigate, useParams } from "react-router-dom";
import * as S from "./UserCard.styled.js";
import { Router } from "../routes.js";
import { useEffect, useState } from "react";
import { getUserTasks } from "../../api.js";
import { useUserContext } from "../../context/UserContext.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { statusList } from "../../components/Main/Main.jsx";

export const UserCard = ({ task, setTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [selected, setSelected] = useState(false);
  const { user } = useUserContext(null);

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
    localStorage.removeItem("date");
  };

  const editCard = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const selectStatus = () => {
    setSelected();
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
                          onClick={selectStatus}
                          $selected={selected}
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
                    name="text"
                    readOnly={isEdit ? false : true}
                    placeholder="Введите описание задачи..."
                  ></S.TextArea>
                </S.FormBlock>
              </S.Form>
              <Calendar date={task.date} />
            </S.Wrap>
            <S.ThemeDown>
              <S.Cat>Категория</S.Cat>
              <S.Categories $topic={task.topic}>
                <p>{task.topic}</p>
              </S.Categories>
            </S.ThemeDown>

            {isEdit ? (
              <S.BtnBrowse>
                <S.BtnGroup>
                  <S.CloseButton className="btn-edit__edit _btn-bg _hover01">
                    Сохранить
                  </S.CloseButton>
                  <S.Button onClick={cancelEdit}>Отменить</S.Button>
                  <S.Button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                  >
                    Удалить задачу
                  </S.Button>
                </S.BtnGroup>
                <S.CloseButton className="btn-edit__close _btn-bg _hover01">
                  Закрыть
                </S.CloseButton>
              </S.BtnBrowse>
            ) : (
              <S.BtnBrowse>
                <S.BtnGroup>
                  <S.Button onClick={editCard}>Редактировать задачу</S.Button>
                  <S.Button>Удалить задачу</S.Button>
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
