import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DEFAULT_URL } from "./defaultUrl";

export const fetchUserInfo = createAsyncThunk(
  "userInfo/fetchUserInfo",
  async (data) => {
    const response = await fetch(`${DEFAULT_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return rejectWithValue("Error");
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: {},
    loading: false,
    isAuthorize: false,
    authorizeError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state) => {
      state.loading = true;
      state.authorizeError = false;
    });
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.isAuthorize = true;
      state.loading = false;
    });
    builder.addCase(fetchUserInfo.rejected, (state, error) => {
      state.loading = false;
      state.authorizeError = true;
    });
  },
});

export default userInfoSlice.reducer;
