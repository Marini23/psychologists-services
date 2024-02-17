import { createSlice } from '@reduxjs/toolkit';
import { fetchAll } from './psychologistsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState: {
    psychologistsItems: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchAll.pending, handlePending)
      .addCase(fetchAll.rejected, handleRejected)
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.advertsItems = action.payload;
      }),
});

export const psychologistsReducer = psychologistsSlice.reducer;
