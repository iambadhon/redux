import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    multiply4x: (state) => {
      state.value *= 4;
    },
    division5x: (state) => {
      state.value /= 5;
    },
  },
});

export const {
  increment,
  decrement,
  multiply2x,
  division2x,
  multiply3x,
  multiply4x,
  division3x,
  division5x,
} = counterSlice.actions;

export default counterSlice.reducer;
