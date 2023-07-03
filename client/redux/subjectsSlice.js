import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DEFAULT_URL } from "./defaultUrl";

export const fetchSubjects = createAsyncThunk(
  "subjects/fetchSubjects",
  async (userInfo) => {
    const response = await fetch(
      `${DEFAULT_URL}/schedule/${userInfo.group_id}/${userInfo.userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
    
    if (!response.ok) {
      return rejectWithValue("Error");
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const subjectsSlice = createSlice({
  name: "subjects",
  initialState: {
    subjects: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSubjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSubjects.fulfilled, (state, action) => {
      state.subjects = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchSubjects.rejected, (state, error) => {
      state.loading = false;
    });
  },
});

export default subjectsSlice.reducer;
