import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "lib/api/auth.api";

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await AuthApi.login({ username, password });
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
    } catch (e) {
      if (!e.response) throw e;
      return rejectWithValue.apply(e.response.data);
    }
  }
);

const initialState = {
  auth: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initAuth: (state) => {
      state.auth = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.auth = action.payload;
      state.error = null;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.error = action.payload;
      state.auth = null;
    });
  },
});

export const { initAuth } = authSlice.actions;
export default authSlice.reducer;
