import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFirstPage,
  fetchTotalHits,
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
    currentPage: 1,
    totalPages: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    changePage(state) {
      state.currentPage += 1;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchTotalHits.pending, handlePending)
      .addCase(fetchTotalHits.rejected, handleRejected)
      .addCase(fetchTotalHits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalPages = Math.ceil(action.payload / 3);
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

export const { changePage } = psychologistsSlice.actions;

export const psychologistsReducer = psychologistsSlice.reducer;
