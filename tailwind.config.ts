import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F6F6D',
          50: '#e6f2f1',
          100: '#b3d9d6',
          200: '#80c0bb',
          300: '#4da7a0',
          400: '#2F6F6D',
          500: '#2F6F6D',
          600: '#265a58',
          700: '#1d4543',
          800: '#14302e',
          900: '#0b1b19',
        },
        secondary: {
          DEFAULT: '#1F3A5F',
          50: '#e5eaf0',
          100: '#b3c4d3',
          200: '#809eb6',
          300: '#4d7899',
          400: '#1F3A5F',
          500: '#1F3A5F',
          600: '#192e4c',
          700: '#132239',
          800: '#0d1626',
          900: '#070a13',
        },
        accent: {
          DEFAULT: '#F4C430',
          50: '#fef9e6',
          100: '#fdedb3',
          200: '#fce180',
          300: '#fbd54d',
          400: '#F4C430',
          500: '#F4C430',
          600: '#c39d26',
          700: '#92761c',
          800: '#614f13',
          900: '#302809',
        },
        background: {
          DEFAULT: '#F8FAF9',
          50: '#F8FAF9',
          100: '#F8FAF9',
          200: '#eef2f0',
          300: '#e4eae7',
          400: '#dae2de',
          500: '#d0dad5',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

