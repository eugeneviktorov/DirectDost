import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DEFAULT_URL } from "./defaultUrl";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const response = await fetch(`${DEFAULT_URL}/teachers`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    if (!response.ok) {
      return rejectWithValue("Error");
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      state.teachers = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTeachers.rejected, (state, error) => {
      state.loading = false;
    });
  },
});

export default teachersSlice.reducer;
