import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { persistReducer } from 'redux-persist';
import { authReducer } from './authSlice/authSlice';
import { psychologistsReducer } from './psychologistsSlice';
import { favoritesReducer } from './favoritesSlice/favoritesSlice';
import { themeReducer } from './themeSlice/themeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const favoretesPersistConfig = {
  key: 'favorites',
  storage,
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    psychologists: psychologistsReducer,
    favorites: persistReducer(favoretesPersistConfig, favoritesReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export let persistor = persistStore(store);
