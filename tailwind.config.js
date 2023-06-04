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
        '552': '34.5rem',
        '664': '41.5rem',
        '71.5': '71.5%',
        '2.28': '2.28rem',
        '0.53': '0.53rem'
      },
      fontFamily: {
        'monospace': ['monospace'],
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
