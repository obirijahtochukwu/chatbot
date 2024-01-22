import { stories } from "@/components/pages/dashboard";
import { chatbot } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "context",
  initialState: {
    chatbot: {},
    chatbots: [
      { name: "Chatbot A", date: "Jan 16, 2023", percent: "80%", stories },
    ],
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
    createChatbot: (state: any, { payload }: { payload: chatbot }) => {
      state.chatbots = [...state.chatbots, payload];
    },
    createStory: (state, { payload }) => {
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
export const {
  addChatbot,
  getChatbots,
  createChatbot,
  createStory,
  addActivePage,
} = authSlice.actions;
export default authSlice.reducer;
