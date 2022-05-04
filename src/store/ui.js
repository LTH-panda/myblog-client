import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  searchbar: false,
  editmode: false,
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
    toggleEditmode: (state) => {
      state.editmode = !state.editmode;
    },
  },
});

export const { toggleSidebar, toggleSearchbar, toggleEditmode } =
  uiSlice.actions;
export default uiSlice.reducer;
