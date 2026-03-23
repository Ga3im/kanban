import { useNavigate, useParams } from "react-router-dom";
import * as S from "./UserCard.styled.js";
import { Router } from "../routes.js";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { statusList } from "../../components/Main/Main.jsx";
import { useSelector } from "react-redux";

export const UserCard = ({ setSelected, selected }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState({});
  const { selectedCard } = useSelector((state) => state.cards);
  console.log(selectedCard);
  const { user } = useUserContext(null);
  const navigate = useNavigate();
  const closeUserCard = () => {
    navigate(Router.main);
  };

  const editCard = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const saveEditButton = () => {
    setIsEdit(false);
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const onSelectStatus = (i) => {
    setIsEdit({ ...edit, status: i });
  };

  const deleteButton = () => {};

  return (
    <S.Browse>
      <S.Container>
        <S.Block>
          <S.Content>
            <S.TopBlock>
              <S.Title>{selectedCard.title}</S.Title>
              <S.Close onClick={() => history.back()}>&#10006;</S.Close>
            </S.TopBlock>
            <S.Status>
              <S.StatusThemes>
                {isEdit ? (
                  <>
                    {statusList.map((i) => {
                      return (
                        <S.StatusTheme
                          key={i}
                          $selectStatus={selectedCard.status === i}
                          onClick={() => onSelectStatus(i)}
                        >
                          <p>{i}</p>
                        </S.StatusTheme>
                      );
                    })}
                  </>
                ) : (
                  <S.StatusTheme $selectStatus={selectedCard.status}>
                    <p>{selectedCard.status}</p>
                  </S.StatusTheme>
                )}
              </S.StatusThemes>
            </S.Status>
            <S.Wrap>
              <S.Form action="#">
                <S.Label htmlFor="textArea01">Описание задачи</S.Label>
                <S.TextArea
                  rows={5}
                  onChange={(e) =>
                    setEdit({ ...edit, description: e.target.value })
                  }
                  placeholder="Введите описание задачи..."
                  defaultValue={selectedCard.description}
                  readOnly={isEdit ? false : true}
                ></S.TextArea>

                <S.Date>Срок выполнения: {selectedCard.date}</S.Date>
              </S.Form>
              {isEdit && (
                <Calendar selected={selected} setSelected={setSelected} />
              )}
            </S.Wrap>

            <S.BtnBrowse>
              <S.BtnGroup>
                {isEdit ? (
                  <>
                    {" "}
                    <S.CloseButton onClick={saveEditButton}>
                      Сохранить
                    </S.CloseButton>
                    <S.Button onClick={cancelEdit}>Отменить</S.Button>
                  </>
                ) : (
                  <>
                    <S.Button onClick={editCard}>Редактировать</S.Button>
                    <S.Button onClick={deleteButton}>Удалить</S.Button>
                  </>
                )}
              </S.BtnGroup>
              <S.CloseButton onClick={closeUserCard}>Закрыть</S.CloseButton>
            </S.BtnBrowse>
          </S.Content>
        </S.Block>
      </S.Container>
      ;
    </S.Browse>
  );
};
