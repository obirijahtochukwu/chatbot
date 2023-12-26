import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        md: "15px",
      },
      colors: {
        primary: "#000",
        secondary: "#0177FB",
        neutral: "#F6F6F6",
      },
      boxShadow: {
        "3xl": "[0px 4px 35px 0px rgba(0,0,0,0.15)]",
      },
    },
  },
  plugins: [],
};
export default config;
