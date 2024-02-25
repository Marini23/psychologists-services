import { createSelector } from '@reduxjs/toolkit';

export const selectName = state => state.auth.user.name;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoading = state => state.psychologists.isLoading;

export const selectError = state => state.psychologists.error;

export const selectPsychologistsItems = state =>
  state.psychologists.psychologistsItems;

export const selectTotalPages = state => state.psychologists.totalPages;

export const selectCurrentPage = state => state.psychologists.currentPage;

export const selectFilter = state => state.psychologists.selectedFilter;

export const selectFavoritesPsychologists = state =>
  state.favorites.favoritesPsychologists;

export const selectFilteredPsychologists = createSelector(
  [selectPsychologistsItems, selectFilter],
  (psychologists, filter) => {
    const key = filter.replace('_ascending', '').replace('_descending', '');
    if (filter.includes('_ascending')) {
      return [...psychologists].sort((a, b) => {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return a[key] - b[key]; // Numeric comparison if both are numbers
        } else {
          return a[key].localeCompare(b[key]);
        }
      });
    } else if (filter.includes('_descending')) {
      return [...psychologists].sort((a, b) => {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return b[key] - a[key];
        } else {
          return b[key].localeCompare(a[key]);
        }
      });
    } else {
      return psychologists;
    }
  }
);
