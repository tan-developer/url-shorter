/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'linear-pink' : '#EB568E',
        'linear-blue' : '#144EE3',
      }
    },
  },
  plugins: [],
}