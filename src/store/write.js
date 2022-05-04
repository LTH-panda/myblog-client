import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as WriteApi from "lib/api/write.api";

const initialState = {
  title: "",
  content: " ",
  category: "Log",
  loading: false,
  error: null,
};

export const fetchWrite = createAsyncThunk(
  "write/fetchWrite",
  async ({ category, title, content }, { rejectWithValue }) => {
    try {
      await WriteApi.write({ category, title, content });
    } catch (e) {
      if (!e.response) throw e;
      return rejectWithValue(e.response.data);
    }
  }
);

const writeSlice = createSlice({
  name: "write",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload.content;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWrite.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWrite.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchWrite.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setCategory, setTitle, setContent } = writeSlice.actions;
export default writeSlice.reducer;
