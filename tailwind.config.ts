import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mock': "url('/images/mock.png')",
      },
      colors: {
        main: "#028747",
        gray: "#3D3D3D",
      },
    },
  },
  plugins: [],
};
export default config;
