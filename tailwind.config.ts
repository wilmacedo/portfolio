import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#14091E",
      },
      backgroundImage: {
        "background-one": "url('/background_one.png')",
        "gradient-radial":
          "radial-gradient(600px at 0px 0px, rgba(214, 126, 63, .15), rgba(165, 83, 116, .15), transparent 80%)",
      },
      keyframes: {
        "bottom-top": {
          "0%": {
            transform: "translateY(50px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
      animation: {
        "bottom-top": "bottom-top 1s cubic-bezier(.93,-.01,.17,1.01) forwards",
        "fade-in": "fade-in 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
