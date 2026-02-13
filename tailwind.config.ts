import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#8b5cf6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#10b981",
          foreground: "#ffffff",
        },
        retro: {
          black: "#0f0f0f",
          white: "#f0f0f0",
          gray: "#2d2d2d",
          accent: "#ff0055",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        retro: ["var(--font-pixel)", "monospace"],
      },
      backgroundImage: {
        scanlines:
          "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
      },
    },
  },
  plugins: [],
};

export default config;
