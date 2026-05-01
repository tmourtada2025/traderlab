import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette (matches Finverse deck)
        ink: "#FFFFFF",                  // primary text
        bg: "#0A1020",                   // page background (deep navy)
        bg2: "#10182A",                  // elevated surface (cards)
        bg3: "#161E33",                  // hover/active surface
        border: "#1F2940",               // subtle line
        muted: "#8590A8",                // secondary text
        dim: "#5C6680",                  // tertiary
        accent: "#1D9E75",               // emerald — brand accent

        // Category tag colors (from program-architecture mockup)
        cat: {
          foundations: "#1D9E75",
          "foundations-bg": "#0F2A22",
          "foundations-fg": "#5DD3A8",
          technical: "#378ADD",
          "technical-bg": "#0F2238",
          "technical-fg": "#7DB3F0",
          institutional: "#7F77DD",
          "institutional-bg": "#1F1D38",
          "institutional-fg": "#B1ABF0",
          integration: "#F59E0B",
          "integration-bg": "#3A2810",
          "integration-fg": "#FBBF52",
          psychology: "#E5A1F0",
          "psychology-bg": "#2A1934",
          "psychology-fg": "#E5A1F0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: any }) {
      addVariant("rtl", '&:where([dir="rtl"], [dir="rtl"] *)');
      addVariant("ltr", '&:where([dir="ltr"], [dir="ltr"] *)');
    },
  ],
};
export default config;
