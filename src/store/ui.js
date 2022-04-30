const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  sidebar: false,
  searchbar: false,
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
  },
});

export const { toggleSidebar, toggleSearchbar } = uiSlice.actions;
export default uiSlice.reducer;
