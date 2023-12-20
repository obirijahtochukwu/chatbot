import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "context",
  initialState: {
    chatbot: {},
    chatbots: [],
    story: {},
    activePage: true,
  },
  reducers: {
    addChatbot: (state, { payload }) => {
      state.chatbot = payload;
    },
    getChatbots: (state, { payload }) => {
      state.chatbots = payload;
    },
    addStory: (state, { payload }) => {
      state.story = payload;
    },
    addActivePage: (state, { payload }) => {
      state.activePage = payload;
    },
  },
});
export const { addChatbot, getChatbots, addActivePage } = authSlice.actions;
export default authSlice.reducer;
