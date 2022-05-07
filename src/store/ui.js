import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  searchbar: false,
  editmode: false,
  navActive: 0,
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
    setNavActive: (state, { payload }) => {
      state.navActive = payload.id;
    },
  },
});

export const { toggleSidebar, toggleSearchbar, toggleEditmode, setNavActive } =
  uiSlice.actions;
export default uiSlice.reducer;
