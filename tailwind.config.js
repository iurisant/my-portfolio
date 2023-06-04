/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '530': '33.125rem',
        '700': '43.75rem'
      },
      fontFamily: {
        'monospace': ['monospace'],
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
