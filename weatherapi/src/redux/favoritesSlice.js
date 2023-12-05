import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
   favoritesArr : [],
   hasFavo: false,
  },
  reducers: {
    clearFavorites: (state) => {
      state.favoritesArr = [];
      state.hasFavo = false;
    },
    addCityToFavorites: (state, action) => {
      // action.payload is the city data to be added
      state.favoritesArr.push(action.payload);
      state.hasFavo = true;
    },
    removeKeyFromFavorites: (state, action) => {
      //  action.payload is the key of the item to be removed
      state.favoritesArr.splice(action.payload, 1);
      state.hasFavo = state.favoritesArr.length > 0;
    },
  },
});

export const {
    clearFavorites,
    addCityToFavorites,
    removeKeyFromFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;