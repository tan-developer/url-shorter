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
        'root-bg' : '#0B101B',
        'dark-grey' : '#181E29',
        'lite' : '#C9CED6',
        'drak-border' : '#323E59'
      }
    },
  },
  plugins: [],
}