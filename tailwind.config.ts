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
      md: "939px",
      lg: "1350px",
      xl: "1920px",
    },
    fontFamily: {
      montserrat: "var(--font-montserrat), sans-serif",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} satisfies Config;
