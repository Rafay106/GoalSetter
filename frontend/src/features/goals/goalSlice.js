import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialGoalState = {
  goals: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const goalSlice = createSlice({
  name: "goal",
  initialGoalState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSucccess = false;
      state.isError = false;
      message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase().addCase().addCase();
  },
});
