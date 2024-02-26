import { createSlice } from '@reduxjs/toolkit';
import { green } from 'themeSwitcher';

const ThemeSlice = createSlice({
  name: `theme`,
  initialState: {
    selectedTheme: green,
  },

  reducers: {
    setSelectedTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setSelectedTheme } = ThemeSlice.actions;
export const themeReducer = ThemeSlice.reducer;
