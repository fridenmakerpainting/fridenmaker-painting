/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official Fridenmaker Brand Colors
        slate: '#122624',
        tan: {
          DEFAULT: '#8f7d60',
          light: '#a99474',
        },
        cream: '#FAF9F7',
        charcoal: '#2C2C2C',
        'warm-gray': '#6B6B6B',
        lavender: {
          DEFAULT: '#DEDAE3',
          light: '#F5F3F7',
        },
        // Aliases for components
        navy: '#122624',
        gold: '#8f7d60',
        sage: {
          DEFAULT: '#5C6B5A',
          dark: '#122624',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Joane', 'Vollkorn', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
