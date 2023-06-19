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
        '552': '34.5rem',
        '664': '41.5rem',
        '214': '13.375rem',
        '330': '20.625rem',
        '71.5': '71.5%',
        '2.28': '2.28rem',
        '0.53': '0.53rem',
      },
      fontFamily: {
        'monospace': ['monospace'],
        'roboto': ['Roboto', 'sans-serif']
      },
      screens: {
        'mobilel': '425px',
        'mobilem': '375px',
        'mobiles': '320px',
      },
    },
  },
  plugins: [],
}
