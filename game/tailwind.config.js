/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // gridTemplateColumns: {
      //   // Simple 16 column grid
      //   'game-field': 'repeat(3, 40px)',

      //   // Complex site-specific column configuration
      //   // 'footer': '200px minmax(900px, 1fr) 100px',
      // },
      // gridTemplateRows: {
      //   // Simple 16 column grid
      //   'game-field': 'repeat(5, 40px)',

      //   // Complex site-specific column configuration
      //   // 'footer': '200px minmax(900px, 1fr) 100px',
      // }
      fontSize: {
        "base-span": "23px",
      },
      lineHeight: {
        tight: "1.2",
      },
    },
  },
  plugins: [],
};
