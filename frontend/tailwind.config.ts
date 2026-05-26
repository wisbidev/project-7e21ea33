import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        background: "#0B1121",
        surface: "#1E293B",
        "text-secondary": "#94A3B8",
        headline: "#F8FAFC",
      },
    },
  },
  plugins: [],
};

export default config;
