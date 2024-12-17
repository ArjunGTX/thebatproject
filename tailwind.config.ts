import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "880px",
      lg: "1290px",
      xl: "1920px",
    },
    fontFamily: {
      "bebas-neue": "var(--font-bebas-neue), sans-serif",
      "rethink-sans": "var(--font-rethink-sans), sans-serif",
    },
    extend: {
      colors: {},
    },
    fontSize: {
      xs: "0.875rem",
      sm: "0.925rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
      "7xl": "3.5rem",
      "8xl": "4rem",
      "9xl": "4.5rem",
      "10xl": "5.25rem",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} satisfies Config;
