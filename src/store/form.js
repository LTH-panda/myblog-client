import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    username: "",
    password: "",
  },
  search: {
    search: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeForm: (state, action) => {
      state[action.payload.form][action.payload.name] = action.payload.value;
    },
    resetForm: (state, action) => {
      state[action.payload.form] = initialState[action.payload.form];
    },
  },
});

export const { changeForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
