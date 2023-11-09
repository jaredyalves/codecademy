import {createSlice} from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards', initialState: {}, reducers: {
    addCard: (state, action) => ({
      ...state, [action.payload.id]: action.payload,
    }),
  },
});

export const selectCards = state => state.cards;

export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;