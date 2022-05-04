import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as AuthApi from "lib/api/auth.api";

export const fetchCheck = createAsyncThunk(
  "user/fetchCheck",
  async (_, { rejectWithValue }) => {
    try {
      const res = await AuthApi.check();
      return res.data;
    } catch (e) {
      if (!e.response) throw e;
      return rejectWithValue(e.response.data);
    }
  }
);

export const fetchLogout = createAsyncThunk(
  "auth/fetchLogout",
  async (_, { rejectWithValue }) => {
    try {
      await AuthApi.logout();
      localStorage.removeItem("user");
    } catch (e) {
      if (!e.response) throw e;
      return rejectWithValue(e.response.data);
    }
  }
);

const initialState = {
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTempUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCheck.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(fetchCheck.rejected, (state, action) => {
      state.user = null;
      state.error = action.payload;
    });
    builder.addCase(fetchLogout.fulfilled, (state) => {
      state.user = null;
      state.error = null;
    });
    builder.addCase(fetchLogout.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { setTempUser } = userSlice.actions;
export default userSlice.reducer;
