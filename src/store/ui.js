import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  sidebar: false,
  searchbar: false,
  authForm: {
    username: "",
    password: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    toggleSearchbar: (state) => {
      state.searchbar = !state.searchbar;
    },
    changeForm: (state, action) => {
      state.authForm;
    },
  },
});

export const { toggleSidebar, toggleSearchbar } = uiSlice.actions;
export default uiSlice.reducer;
