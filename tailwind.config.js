/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f7f4',
          100: '#e9ede4',
          200: '#d3dcc8',
          300: '#b4c3a4',
          400: '#95aa81',
          500: '#7a9164', // Base sage green
          600: '#5f7349',
          700: '#4a5a3b',
          800: '#3d4831',
          900: '#2c3423',
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