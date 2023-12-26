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
