import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfoSlice";
import subjectsReducer from "./subjectsSlice";
import teachersReducer from "./teachersSlice";
import sectionsReducer from "./sectionsSlice";

export const store = configureStore({
    reducer: {
      userInfo: userInfoReducer,
      subjects: subjectsReducer,
      teachers: teachersReducer,
      sections: sectionsReducer,
    }
  });