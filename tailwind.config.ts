import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: v("bg"),
        surface: v("surface"),
        foreground: v("fg"),
        secondary: v("muted"),
        divider: v("line"),
        accent: v("accent"),
        "blue-accent": v("blue"),
        "red-accent": v("red"),
        "yellow-accent": v("yellow"),
      },
      fontFamily: {
        serif: ["var(--font-display)", "var(--font-display-greek)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1240px", text: "720px" },
    },
  },
  plugins: [],
};
export default config;
