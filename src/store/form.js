import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as CareerApi from "lib/api/career.api";

export const fetchCareer = createAsyncThunk(
  "form/fetchCareer",
  async ({ id }) => {
    const res = await CareerApi.getCareer({ id });
    return res.data;
  }
);

const initialState = {
  auth: {
    username: "",
    password: "",
  },
  search: {
    search: "",
  },
  career: {
    title: "",
    desc: "",
    during: "",
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
  extraReducers: (builder) => {
    builder.addCase(fetchCareer.fulfilled, (state, action) => {
      state.career.title = action.payload.title;
      state.career.desc = action.payload.desc;
      state.career.during = action.payload.during;
    });
  },
});

export const { changeForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
