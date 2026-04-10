import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
        lg: "992px",
        xl: "1280px"
      },
      maxWidth: {
        content: "1000px",
        header: "1440px",
        footer: "1280px"
      }
    }
  },
  plugins: []
};

export default config;
