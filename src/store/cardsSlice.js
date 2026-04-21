import { createSlice } from "@reduxjs/toolkit";
import { cardList } from "../data";

const getInitCards = () => {
  const savedCards = localStorage.getItem("cards");
  return savedCards ? JSON.parse(savedCards) : cardList;
};

const getInitCard = () => {
  const savedCard = localStorage.getItem("card");
  return savedCard ? JSON.parse(savedCard) : null;
};

const initialState = {
  cards: getInitCards(),
  selectedCard: getInitCard(),
  draggedColumn: null,
  isDeleteModalOpen: false,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
      localStorage.setItem("card", JSON.stringify(state.selectedCard));
    },
    updateCardStatus: (state, action) => {
      const { _id, newStatus } = action.payload;
      const card = state.cards.find(
        (c) => String(c._id || c._id) === String(_id)
      );

      if (card) {
        if (newStatus === "Готово") {
          card.completedDate = new Date();
        } else {
          card.completedDate = null;
        }
        card.status = newStatus;
        localStorage.setItem("cards", JSON.stringify(state.cards));
      }
    },
    setDraggedColumn: (state, action) => {
      state.draggedColumn = action.payload;
    },
    addCard: (state, action) => {
      state.cards.push(action.payload);
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },
    editCard: (state, action) => {
      const { _id, title, description, status, date } = action.payload;
      const index = state.cards.findIndex((c) => c._id === _id);

      if (index !== -1) {
        state.cards[index] = {
          ...state.cards[index],
          title,
          description,
          status,
          date,
        };
        localStorage.setItem("cards", JSON.stringify(state.cards));
      }
    },
    openDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },
    closeDeleteModal: (state) => {
      const card = state.cards.find((c) => c._id === state.selectedCard._id);
      if (card) {
        card.archivedDate = new Date().toISOString();
      }
      localStorage.setItem("cards", JSON.stringify(state.cards));
      state.isDeleteModalOpen = false;
    },
    closeModal: (state) => {
      state.isDeleteModalOpen = false;
    },
    addToArchive: (state) => {
      const card = state.cards.find((c) => c._id === state.selectedCard._id);
      if (card) {
        card.archivedDate = new Date().toISOString();
      }
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },
    returnCard: (state) => {
      const card = state.cards.find((c) => c._id === state.selectedCard._id);
      if (card) {
        card.archivedDate = null;
      }
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },
  },
});

export const {
  setCards,
  setSelectedCard,
  updateCardStatus,
  setDraggedColumn,
  addCard,
  editCard,
  openDeleteModal,
  closeDeleteModal,
  closeModal,
  addToArchive,
  returnCard,
} = cardsSlice.actions;
export default cardsSlice.reducer;
