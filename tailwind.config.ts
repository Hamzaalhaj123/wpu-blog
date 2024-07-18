import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-lighter": "#3e6b9a",
      primary: "#255c99",
      "primary-darker": "#1d4b7a",

      "secondary-lighter": "#ffda66",
      secondary: "#ffd046",
      "secondary-darker": "#c4b400",

      "success-lighter": "#00ff00",
      success: "#00b289",
      "success-darker": "#006600",

      "error-lighter": "#ff6666",
      error: "#ff3333",
      "error-darker": "#cc0000",

      "warning-lighter": "#ff9900",
      warning: "#f59e0b",
      "warning-darker": "#996600",

      "forgound-muted": "#b3b3b3",
      foreground: "#ffffff",

      "background-muted": "#1a1a1a",
      background: "#0f0f0f",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
