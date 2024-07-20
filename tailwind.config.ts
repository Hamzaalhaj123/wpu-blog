import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-lighter": "rgba(var(--primary-lighter))",
      primary: "rgba(var(--primary))",
      "primary-darker": "rgba(var(--primary-darker))",

      "secondary-lighter": "rgba(var(--secondary-lighter))",
      secondary: "rgba(var(--secondary))",
      "secondary-darker": "rgba(var(--secondary-darker))",

      "success-lighter": "rgba(var(--success-lighter))",
      success: "rgba(var(--success))",
      "success-darker": "rgba(var(--success-darker))",

      "error-lighter": "rgba(var(--error-lighter))",
      error: "rgba(var(--error))",
      "error-darker": "rgba(var(--error-darker))",

      "warning-lighter": "rgba(var(--warning-lighter))",
      warning: "rgba(var(--warning))",
      "warning-darker": "rgba(var(--warning-darker))",

      "forgound-muted": "rgba(var(--forgound-muted))",
      foreground: "rgba(var(--foreground))",

      "background-muted": "rgba(var(--background-muted))",
      background: "rgba(var(--background))",
      blur: {
        default: "blur(10px)",
        sm: "blur(4px)",
        md: "blur(8px)",
        lg: "blur(16px)",
        xl: "blur(24px)",
      },

      boxShadow: {
        default: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        sm: "0px 0px 4px rgba(0, 0, 0, 0.1)",
        md: "0px 0px 8px rgba(0, 0, 0, 0.1)",
        lg: "0px 0px 16px rgba(0, 0, 0, 0.1)",
        xl: "0px 0px 24px rgba(0, 0, 0, 0.1)",
      },

      fontFamily: {},
      fontWeight: {
        light: "300",
        normal: "400",
        bold: "700",
      },
      outlineOffset: {
        default: "0px",
        sm: "-1px",
        md: "-2px",
        lg: "-4px",
        xl: "-8px",
      },
      outlineWidth: {
        default: "1px",
        sm: "2px",
        md: "3px",
        lg: "4px",
        xl: "6px",
      },

      ringOffsetWidth: {
        default: "0px",
        sm: "-1px",
        md: "-2px",
        lg: "-4px",
        xl: "-8px",
      },

      ringWidth: {
        default: "1px",
        sm: "2px",
        md: "3px",
        lg: "4px",
        xl: "6px",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      // "primary-lighter": "#3e6b9a",
      // primary: "#255c99",
      // "primary-darker": "#1d4b7a",

      // "secondary-lighter": "#ffda66",
      // secondary: "#ffd046",
      // "secondary-darker": "#c4b400",

      // "success-lighter": "#00ff00",
      // success: "#00b289",
      // "success-darker": "#006600",

      // "error-lighter": "#ff6666",
      // error: "#ff3333",
      // "error-darker": "#cc0000",

      // "warning-lighter": "#ff9900",
      // warning: "#f59e0b",
      // "warning-darker": "#996600",

      // "forgound-muted": "#b3b3b3",
      // foreground: "#ffffff",

      // "background-muted": "#1a1a1a",
      // background: "#0f0f0f",
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
