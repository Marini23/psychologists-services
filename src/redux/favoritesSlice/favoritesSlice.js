import { createSlice } from '@reduxjs/toolkit';

const FavoritesSlice = createSlice({
  name: `favorites`,
  initialState: {
    favoritesPsychologists: [],
    currentPageFavorites: 1,
  },

  reducers: {
    addFavorites(state, action) {
      state.favoritesPsychologists.push(action.payload);
    },
    deleteFavorites(state, action) {
      const index = state.favoritesPsychologists.findIndex(
        item => item.id === action.payload.id
      );
      state.favoritesPsychologists.splice(index, 1);
    },
    clearFavorites(state, action) {
      state.favoritesPsychologists = [];
    },
    changePageFavorites(state) {
      state.currentPageFavorites += 1;
    },
    resetPageFavorites(state, action) {
      state.currentPageFavorites = 1;
    },
  },
});

export const {
  addFavorites,
  deleteFavorites,
  clearFavorites,
  changePageFavorites,
  resetPageFavorites,
} = FavoritesSlice.actions;
export const favoritesReducer = FavoritesSlice.reducer;
