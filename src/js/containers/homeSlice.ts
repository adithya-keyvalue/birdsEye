import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  value: number;
}

const initialState = {
  value: 1,
} as HomeState;

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
  },
});

export default homeSlice;
