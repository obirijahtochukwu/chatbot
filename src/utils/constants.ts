import { component } from "./types";

export const components: component[] = [
  { name: "Component A", value: "5" },
  { name: "Component B", value: "2" },
  { name: "Component C", value: "4" },
  { name: "Component D", value: "5" },
  { name: "Component E", value: "5" },
];

export const headers = [
  "User",
  "User input",
  "User intent (component)",
  "Time",
  "Bot Action (component)",
  "Bot response",
];

export const chat_history = [
  {
    user: "user@gmail.com",
    user_input: "Greetings",
    component: "error",
    time: "22/03/23, 10:05",
    bot_req: "rephrase",
    bot_res: "I’m sorry I didn't understand that",
  },
  {
    user: "user@gmail.com",
    user_input: "Hi",
    component: "greet",
    time: "22/03/23, 10:05",
    bot_req: "greet",
    bot_res: "Let me know if you need any help",
  },
  {
    user: "user@gmail.com",
    user_input: "Good day",
    component: "greet",
    time: "22/03/23, 10:05",
    bot_req: "greet",
    bot_res: "Hi, I’m a bot. Ready to help you",
  },
  {
    user: "user@gmail.com",
    user_input: "Good evening bot",
    component: "email",
    time: "22/03/23, 10:05",
    bot_req: "greet",
    bot_res: "Hi, I’m a bot. Ready to help you",
  },
];

export const config = [
  { settings: [{ title: "Name", value: "Bot Name" }] },
  { settings: [{ title: "Font", value: "Inter" }] },
  { settings: [{ title: "Color", value: "Blue" }] },
  { settings: [{ title: "Chatbot box size", value: "Medium", select: true }] },
  { settings: [{ title: "Host URL", value: "Https://kairon-api.digit..." }] },
  {
    settings: [
      { title: "User type", value: "Custom", select: true },
      { title: "User storage", value: "Local storage", select: true },
    ],
  },
  { settings: [{ title: "X-USER", value: "user@email.com" }] },
  {
    settings: [
      {
        title: "Authorization Token",
        value: "Bearer eyj0jasdoASaAD084sa...",
        copy: true,
      },
    ],
  },
  { settings: [{ title: "Domain whitelisting", value: "Example.com" }] },
];

const script = `<script id="kairon-client-src" type="text/javascript" src="https://kairon.nimblework.com/cdn/kaironLoader.js?botid=65634f0c4175e6bb68ac60e7&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnQUFBQUFCbGJjMEZqR2Z2SmdkVjRnWnhEWXBHeDZ1SGRtdjFHSkRudUlRZ3FoRnB2dG85SjJud3h5NmVhc054c1lWdEZpZW9rdk9qaHpwWk5jM0pyT2dCbktzblBsVDVTWFotMXFtQS1rU3plWlNFN1MwbVFaUzF5TkJvOHNQS2Nlc0JUT0c3dGU3cjFFbmNQSnBZN0hSMmtvby03LUVqWlk5RVZNcnkzSjBtaW9JV2o5MlZfcFVmTFlnaUpVLVNDVFJkUFdKeWpnNHg0YzV6RWNZdE5BSUdKblpOTXJQMVVVcnVVUXg3eXhTS1MtZG52TjdhODVTNzVwNkNDdThvRnZJeHN3VkRjbnJEejZBb0xockFuT0k3b0oweVlwMzdySHI3RzVBTDJ6VkQ4Ri0xT1pwRXNPRUZWd1VxcHE1ZU5BNW1sT0JxUmZuYUw0QlZnekcyZi1KMzQzZG15cnJ2N3c9PSIsInZlcnNpb24iOiIyLjAiLCJpYXQiOjE3MDE2OTQ3MjV9.JCaOI5EB6GTPYO-CmeR9dINpmusrYsKGsiOiC8kjG84"></script>`;

export const scripts = [
  { title: "Script - Add Chat Widget to your website", value: script },
  { title: "Script - Test Chat Widget", value: script },
  { title: "IFRAME - Add Chat Widget to your website", value: script },
];

export const color_theme = [
  { color: "Blue" },
  { color: "Red" },
  { color: "Green" },
  { color: "Yellow" },
];

export const chatbot_sizes = [
  { title: "Small", size: "30px" },
  { title: "Medium", size: "35px" },
  { title: "Big", size: "40px" },
  { title: "Very big", size: "45px" },
];

export const customize_colors = [
  {
    title: "Primary color",
    theme: [
      { for: "Bot", color: "#0177FB" },
      { for: "User", color: "#D4D4D4" },
      { for: "Header", color: "#FFFFFF" },
      { for: "Send icon", color: "#FFFFFF" },
      { for: "Chatbox", color: "" },
      { for: "Open icon", color: "#FFFFFF" },
    ],
  },
  {
    title: "Background",
    theme: [
      { for: "Bot", color: "#EAEAEA" },
      { for: "User", color: "#0177FB" },
      { for: "Header", color: "#0177FB" },
      { for: "Send icon", color: "#0177FB" },
      { for: "Chatbox", color: "#FAFAFA" },
      { for: "Open icon", color: "#0177FB" },
    ],
  },
];

export const ranges = [
  {
    title: "Condensed Chat Container",
    settings: [
      { name: "Height", range: 50 },
      { name: "Width", range: 50 },
    ],
  },
  {
    title: "Header",
    settings: [
      { name: "Header", range: 50 },
      { name: "Alignment", range: 50 },
    ],
  },
  {
    title: "Expanded Chat Container",
    settings: [
      { name: "Height", range: 50 },
      { name: "Width", range: 50 },
    ],
  },
];

export const chat_container = [
  { title: "Header", value: "Custom-header" },
  { title: "Container", value: "colored-box" },
  { title: "Chat container", value: "chat-messenger" },
  { title: "User message", value: "my-user-message" },
  { title: "Bot message", value: "my-bot-message" },
  { title: "Form", value: "theme-input-form" },
  { title: "Open button", value: "trigger-chat" },
];

export const font_setting = [
  { title: "Bot Message Font", value: "Inter" },
  { title: "Size", value: "14px" },
  { title: "User Message Font", value: "Inter" },
  { title: "Size", value: "14px" },
];

export const icons_setting = [
  { name: "Bot icon" },
  { name: "User icon" },
  { name: "Header icon" },
  { name: "Open button icon" },
  { name: "Close button icon" },
];

const date = new Date();
export const formattedDate = date.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export const interactions = [
  { name: "bot", messages: ["Hi How can I help you?"] },
  {
    name: "user",
    messages: [
      "What time is the next event?",
      "When will be holded the event?",
      "When is the next event?",
      "When",
    ],
  },
];

// unique id
export const uid = () => Math.random().toString(16).slice(2, 10) + Date.now();
