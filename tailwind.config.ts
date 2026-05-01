import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        paper: "#f5f1ea",
        accent: "#d4a574",
        muted: "#6b6b6b",
        line: "#1a1a1a",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [
    // Enable rtl: and ltr: variants via [dir="rtl"] / [dir="ltr"] selectors
    function ({ addVariant }: { addVariant: any }) {
      addVariant("rtl", '&:where([dir="rtl"], [dir="rtl"] *)');
      addVariant("ltr", '&:where([dir="ltr"], [dir="ltr"] *)');
    },
  ],
};
export default config;
