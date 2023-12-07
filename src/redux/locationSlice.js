import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    hasLocation: false,
    city: '',
    key: 0,
    cityCurrentConditions: null,
    city5DayConditions: null,
  },
  reducers: {
    setLocation: (state, action) => {
      state.hasLocation = true;
      state.city = action.payload.city;
      state.key = action.payload.key;
      state.cityCurrentConditions = action.payload.cityCurrentConditions;
      state.city5DayConditions = action.payload.city5DayConditions;
    },
    setCityCurrentConditions: (state, action) => {
      state.cityCurrentConditions = action.payload.cityCurrentConditions;
    },
    setCity5DayConditions: (state, action) => {
      state.city5DayConditions = action.payload.city5DayConditions;
    },
    clearLocation: (state) => {
      state.hasLocation = false;
      state.city = '';
      state.key = 0;
      state.cityCurrentConditions = null;
      state.city5DayConditions = null;
    },
  },
});

export const { setLocation, clearLocation ,setCity5DayConditions , setCityCurrentConditions } = locationSlice.actions;

export default locationSlice.reducer;
