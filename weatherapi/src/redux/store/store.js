import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    // Add other reducers as needed
  },
});

export default store;