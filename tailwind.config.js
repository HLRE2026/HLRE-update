/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Emerald base
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        secondary: {
          50: '#f8f7f4',
          100: '#efeae2',
          200: '#e0d3c3',
          300: '#cdb59d',
          400: '#ba977a',
          500: '#8b6f4b', // Base earth brown
          600: '#735a3e',
          700: '#5c4832',
          800: '#4a3a29',
          900: '#362b1e',
        },
        accent: {
          50: '#f4f9fb',
          100: '#e2f1f6',
          200: '#bfe0eb',
          300: '#8ec5d9',
          400: '#5ea9c6',
          500: '#3d8ba9', // Mountain lake blue
          600: '#326f88',
          700: '#2a5a70',
          800: '#244b5d',
          900: '#1b3744',
        }
      },
    },
  },
  plugins: [],
};