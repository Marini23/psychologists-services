import { createSlice } from '@reduxjs/toolkit';
import { createAll, fetchAll } from './psychologistsOperations';

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
      .addCase(createAll.pending, handlePending)
      .addCase(createAll.rejected, handleRejected)
      .addCase(createAll.fulfilled, (state, action) => {
        console.log('reducer');
      })
      .addCase(fetchAll.pending, handlePending)
      .addCase(fetchAll.rejected, handleRejected)
      .addCase(fetchAll.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        state.psychologistsItems = action.payload;
      }),
});

export const psychologistsReducer = psychologistsSlice.reducer;
