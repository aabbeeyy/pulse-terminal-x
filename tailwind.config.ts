import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1020",
        panel: "#121936",
        accent: "#5eead4",
        rose: "#fb7185",
        gold: "#fbbf24"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
