import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        marble: '#f2f8fc',
        slightBlack: '#141517',
        outlineGray: '#f2f2f2',
        hoverOutline: '#e1e1e1',
      },
    },
  },
  plugins: [],
} satisfies Config;
