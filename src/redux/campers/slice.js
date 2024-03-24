import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  camperData: [],
  favorites: [],
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  reducers: {
    setCamperData(state, action) {
      state.camperData = [...state.camperData, ...action.payload];
    },

    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        camper => camper._id !== action.payload._id
      );
    },
  },
});

export const { setCamperData, addToFavorites, removeFromFavorites } =
  camperSlice.actions;
export default camperSlice.reducer;
