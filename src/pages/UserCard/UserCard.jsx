import { useNavigate } from "react-router-dom";
import * as S from "./UserCard.styled.js";
import { Router } from "../routes.js";
import { useEffect, useState } from "react";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { statusList } from "../../components/Main/Main.jsx";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { deleteCard, editCard } from "../../store/cardsSlice.js";

export const UserCard = ({ setSelected, selected }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { selectedCard } = useSelector((state) => state.cards);
  const [edit, setEdit] = useState(selectedCard);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setEdit({ ...edit, date: selected });
  }, [selected]);

  const closeUserCard = () => {
    navigate(Router.main);
  };

  const handleEditCard = (e) => {
    setIsEdit(true);
  };

  const saveEditButton = () => {
    dispatch(editCard(edit));
    setIsEdit(false);
  };

  const cancelEdit = (e) => {
    setIsEdit(false);
  };

  const onSelectStatus = (newStatus) => {
    setEdit({ ...edit, status: newStatus });
  };

  const deleteButton = () => {
    dispatch(deleteCard(selectedCard));
    navigate(Router.main);
  };

  console.log(edit);

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
                          $selectStatus={
                            (edit.status || selectedCard.status) === i
                          }
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

                <S.Date>
                  Срок выполнения:{" "}
                  {format(new Date(selectedCard.date), "dd.MM.yyyy")}
                </S.Date>
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
                    <S.Button onClick={handleEditCard}>Редактировать</S.Button>
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
