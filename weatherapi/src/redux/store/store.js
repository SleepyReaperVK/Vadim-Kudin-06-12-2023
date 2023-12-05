import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../themeSlice.js';
import locationReducer from '../locationSlice.js'
import favoriteReducer from '../favoritesSlice.js';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    location:locationReducer,
    favorite: favoriteReducer,
     // Add other reducers as needed
  },
});

export default store;

