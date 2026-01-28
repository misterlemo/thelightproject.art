import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        foreground: "#1A1A1A",
        secondary: "#666666",
        accent: "#2C5F8D",
        "accent-hover": "#234A6F",
        divider: "#E5E5E5",
        "blue-accent": "#2C5F8D",
        "red-accent": "#C84B4B",
        "yellow-accent": "#D4A017",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        text: "720px",
      },
    },
  },
  plugins: [],
};
export default config;
