export const selectName = state => state.auth.user.name;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoading = state => state.psychologists.isLoading;

export const selectError = state => state.psychologists.error;
