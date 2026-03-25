import { useNavigate } from "react-router-dom";
import * as S from "./UserCard.styled.js";
import { Router } from "../routes.js";
import { useEffect, useState } from "react";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { statusList } from "../../components/Main/Main.jsx";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import {
  addToArchive,
  editCard,
  openDeleteModal,
  returnCard,
} from "../../store/cardsSlice.js";

export const UserCard = ({ setSelected, selected }) => {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { selectedCard } = useSelector((state) => state.cards);
  const [edit, setEdit] = useState(selectedCard);

  const dispatch = useDispatch();

  useEffect(() => {
    setEdit({ ...edit, date: selected });
  }, [selected]);

  const closeUserCard = () => {
    navigate(-1);
  };

  const handleEditCard = (e) => {
    setIsEdit(true);
    setSelected(new Date(selectedCard.date));
  };

  const handleAddArchive = () => {
    dispatch(addToArchive());
    navigate(-1);
  };

  const saveEditButton = () => {
    dispatch(editCard(edit));
    setIsEdit(false);
  };

  const cancelEdit = (e) => {
    setIsEdit(false);
  };

  const handleReturnCard = () => {
    dispatch(returnCard());
    navigate(-1);
  };

  const onSelectStatus = (newStatus) => {
    setEdit({ ...edit, status: newStatus });
  };

  const handleDeleteClick = () => {
    dispatch(openDeleteModal(selectedCard));
  };

  const cardDate = new Date(selectedCard.date).setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);

  const isOverdue = cardDate < today;

  const isDeleted = !selectedCard.completedDate && selectedCard.archivedDate;
  const isComplete = selectedCard.completedDate && !selectedCard.archivedDate;

  return (
    <S.Browse>
      <S.Container>
        <S.Block>
          <S.Content>
            <S.TopBlock>
              <S.Title>{selectedCard.title}</S.Title>
              <S.Close onClick={closeUserCard}>&#10006;</S.Close>
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

                <S.Date $isOverdue={isOverdue}>
                  {selectedCard.archivedDate &&
                    selectedCard.status !== "Готово" && (
                      <>
                        В архиве с:{" "}
                        {format(
                          new Date(selectedCard.archivedDate),
                          "dd.MM.yyyy"
                        )}
                      </>
                    )}
                </S.Date>
                <S.Date>
                  {selectedCard.completedDate ? (
                    <>
                      Выполнен:{" "}
                      {format(
                        new Date(selectedCard.completedDate),
                        "dd.MM.yyyy"
                      )}
                    </>
                  ) : (
                    <S.Date $isOverdue={isOverdue}>
                      Срок выполнения:
                      {isEdit
                        ? format(new Date(selectedCard.date), "dd.MM.yyyy")
                        : format(new Date(edit.date), "dd.MM.yyyy")}
                    </S.Date>
                  )}
                </S.Date>
              </S.Form>
              {isEdit && (
                <Calendar selected={selected} setSelected={setSelected} />
              )}
            </S.Wrap>

            <S.BtnBrowse>
              {isComplete ? (
                <S.Button onClick={handleAddArchive}>В архив</S.Button>
              ) : (
                <S.BtnGroup>
                  {isEdit ? (
                    <>
                      <S.CloseButton onClick={saveEditButton}>
                        Сохранить
                      </S.CloseButton>
                      <S.Button onClick={cancelEdit}>Отменить</S.Button>
                    </>
                  ) : isDeleted ? (
                    <S.Button onClick={handleReturnCard}>Вернуть</S.Button>
                  ) : (
                    !selectedCard.archivedDate && (
                      <>
                        <S.Button onClick={handleEditCard}>
                          Редактировать
                        </S.Button>
                        <S.Button onClick={handleDeleteClick}>Удалить</S.Button>
                      </>
                    )
                  )}
                </S.BtnGroup>
              )}

              <S.CloseButton onClick={closeUserCard}>Закрыть</S.CloseButton>
            </S.BtnBrowse>
          </S.Content>
        </S.Block>
      </S.Container>
      ;
    </S.Browse>
  );
};
