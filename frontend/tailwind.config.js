/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        bgDark: '#0a192f',
        textLight: '#ccd6f6',
        accent: '#64ffda',
        dim: '#8892b0',
      },
    },
  },
  plugins: [],
}
