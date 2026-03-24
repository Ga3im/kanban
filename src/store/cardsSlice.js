import { createSlice } from "@reduxjs/toolkit";
import { cardList } from "../data";

const getInitCards = () => {
  const savedCards = localStorage.getItem("cards");
  return savedCards ? JSON.parse(savedCards) : cardList;
};

const initialState = {
  cards: getInitCards(),
  selectedCard: null,
  draggedColumn: null,
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
    },
    updateCardStatus: (state, action) => {
      const { _id, newStatus } = action.payload;
      const card = state.cards.find(
        (c) => String(c._id || c._id) === String(_id)
      );

      if (card) {
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
    deleteCard: (state, action) => {
      const { _id } = action.payload;
      state.cards = state.cards.filter((c) => c._id !== _id);
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
  },
});

export const {
  setCards,
  setSelectedCard,
  updateCardStatus,
  setDraggedColumn,
  addCard,
  deleteCard,
  editCard,
} = cardsSlice.actions;
export default cardsSlice.reducer;
