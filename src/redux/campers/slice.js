import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperData } from './operations';

const initialState = {
  camperData: [],
  favorites: [],
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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamperData.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camperData = action.payload;
      })
      .addCase(fetchCamperData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const camperReducer = camperSlice.reducer;
