import { createSlice } from '@reduxjs/toolkit';

const FavoritesSlice = createSlice({
  name: `favorites`,
  initialState: {
    favoritesPsychologists: [],
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
  },
});

export const { addFavorites, deleteFavorites, clearFavorites } =
  FavoritesSlice.actions;
export const favoritesReducer = FavoritesSlice.reducer;
