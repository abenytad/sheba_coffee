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
        primary:"#e0af70",
        secondary:"#81491f",
        tertiary:"#301e14",
        coffe:"#6F4E37"
      },
      height: {
        '120': '30rem', // Customize height as needed
      },
      
    },
  },
  plugins: [],
};
export default config;
