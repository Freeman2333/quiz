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
        primary: "var(--primary)", // Hex: #1F002B
        secondary: "var(--secondary)", // Hex: #36173D
        accent: "var(--accent)", // Hex: #E4229C
      },
    },
  },
  plugins: [],
};
export default config;
