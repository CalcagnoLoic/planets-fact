/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        blackPearl: "#070724",
        brightGray: "#38384F",
        waterloo: "#838391",
        pelorous: "#419EBB",
        tulipTree: "#EDA249",
        purpleHeart: "#6F2ED6",
        valencia: "#D14C32",
        darkValencia: "#D83A34",
        piper: "#CD5120",
        java: "#1EC2A4",
        royalBlue: "#2D68F0",
      },
      fontFamily: {
        antonio: ["antonio"],
        leagueSpartan: ["spartan"]
      }
    },
  },
  plugins: [],
};
