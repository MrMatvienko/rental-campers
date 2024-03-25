import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdvertList } from 'API/api';

export const fetchCamperData = createAsyncThunk('camper', async () => {
  try {
    const data = await getAdvertList();
    return data;
  } catch (error) {
    throw error;
  }
});
