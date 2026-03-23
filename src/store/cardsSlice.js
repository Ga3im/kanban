import { createSlice } from "@reduxjs/toolkit";
import { cardList } from "../data";

const initialState = {
  cards: cardList,
  selectedCard: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
  },
});

export const { setCards, setSelectedCard } = cardsSlice.actions;
export default cardsSlice.reducer;
