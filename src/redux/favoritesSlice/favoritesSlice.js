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
      const index = state.favoritesIPsychologists.findIndex(
        item => item.id === action.payload.id
      );
      state.favoritesPsychologists.splice(index, 1);
    },
  },
});

export const { addFavorites, deleteFavorites } = FavoritesSlice.actions;
export const favoritesReducer = FavoritesSlice.reducer;
