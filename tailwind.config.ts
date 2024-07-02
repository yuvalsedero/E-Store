import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#EF9C66",
        "secondary": "#FCDC94",
        "accent": "#C8CFA0",
        "neutral": "#78ABA8",
        "base-100": "#ffffff",
      },
    },],
  },
};
export default config;
