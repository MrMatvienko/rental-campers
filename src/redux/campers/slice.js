import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperData } from './operations';

const initialState = {
  camperData: [],
  favorites: [],
  filters: [],
  isLoading: false,
  error: null,
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  reducers: {
    setCamperData: (state, action) => {
      state.camperData = action.payload;
    },
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        camper => camper._id !== action.payload._id
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    loadFavoritesFromLocalStorage(state) {
      const favoritesFromStorage = JSON.parse(
        localStorage.getItem('favorites')
      );
      if (favoritesFromStorage) {
        state.favorites = favoritesFromStorage;
      }
    },
    setFilters(state, action) {
      if (Array.isArray(action.payload.filters)) {
        state.filters = action.payload.filters;
      } else {
        console.error('Invalid filters payload:', action.payload);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamperData.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.camperData = [];
        setFilters(state);
      })
      .addCase(fetchCamperData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camperData = action.payload;
        setFilters(state);
      })
      .addCase(fetchCamperData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setCamperData,
  addToFavorites,
  removeFromFavorites,
  loadFavoritesFromLocalStorage,
  setFilters,
} = camperSlice.actions;
export const camperReducer = camperSlice.reducer;
