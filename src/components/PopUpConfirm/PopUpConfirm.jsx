import { useDispatch, useSelector } from "react-redux";
import { closeDeleteModal, closeModal } from "../../store/cardsSlice";
import * as S from "./PopUpConfirm.styled";
import { Router } from "../../pages/routes";
import { useNavigate } from "react-router-dom";
import { Portal } from "../Portal/Portal";

export const PopUpConfirm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDeleteModalOpen } = useSelector((state) => state.cards);

  if (!isDeleteModalOpen) return null;

  const handleConfirm = () => {
    dispatch(closeDeleteModal());
    navigate(Router.main);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Portal>
      <S.PopUp onClick={handleCloseModal}>
        <S.Container>
          <S.Block onClick={(e) => e.stopPropagation()}>
            <S.Title>Удалить задачу?</S.Title>
            <S.Text>Вы уверены? Это действие нельзя отменить.</S.Text>
            <S.ButtonGroup>
              <S.BtnDelete onClick={handleConfirm}>Да, удалить</S.BtnDelete>
              <S.BtnCancel onClick={handleCloseModal}>Отмена</S.BtnCancel>
            </S.ButtonGroup>
          </S.Block>
        </S.Container>
      </S.PopUp>
    </Portal>
  );
};
