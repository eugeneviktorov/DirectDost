import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DEFAULT_URL } from "./defaultUrl";

export const fetchAllSections = createAsyncThunk(
  "sections/fetchAllSections",
  async () => {
    const response = await fetch(
      `${DEFAULT_URL}/sections`,
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

export const fetchUserSections = createAsyncThunk(
  "sections/fetchUserSections",
  async (uid) => {
    const response = await fetch(
      `${DEFAULT_URL}/sections/${uid}`,
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

const sectionsSlice = createSlice({
  name: "sections",
  initialState: {
    sections: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllSections.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllSections.fulfilled, (state, action) => {
      state.sections = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllSections.rejected, (state, error) => {
      state.loading = false;
    });

    builder.addCase(fetchUserSections.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserSections.fulfilled, (state, action) => {
      state.sections = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUserSections.rejected, (state, error) => {
      state.loading = false;
    });
  },
});

export default sectionsSlice.reducer;
