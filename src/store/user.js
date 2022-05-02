import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserStorage: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { getUserStorage } = userSlice.actions;
export default userSlice.reducer;
