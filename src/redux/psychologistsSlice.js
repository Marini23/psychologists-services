import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAll,
  fetchFirstPage,
  loadMorePages,
} from './psychologistsOperations';

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
      // .addCase(createAll.pending, handlePending)
      // .addCase(createAll.rejected, handleRejected)
      // .addCase(createAll.fulfilled, (state, action) => {
      //   console.log('reducer');
      // })
      .addCase(fetchAll.pending, handlePending)
      .addCase(fetchAll.rejected, handleRejected)
      .addCase(fetchAll.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        state.psychologistsItems = action.payload;
      })
      .addCase(fetchFirstPage.pending, handlePending)
      .addCase(fetchFirstPage.rejected, handleRejected)
      .addCase(fetchFirstPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.psychologistsItems = action.payload;
      })
      .addCase(loadMorePages.pending, handlePending)
      .addCase(loadMorePages.rejected, handleRejected)
      .addCase(loadMorePages.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        state.psychologistsItems = [
          ...state.psychologistsItems,
          ...action.payload,
        ];
      }),
});

export const psychologistsReducer = psychologistsSlice.reducer;
