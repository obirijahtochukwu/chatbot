"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const rootReducer = combineReducers({
  context: slice,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
