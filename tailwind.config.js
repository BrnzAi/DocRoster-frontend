/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SF Pro Text', 'system-ui', 'sans-serif'],
        'sf-display': ['SF UI Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
