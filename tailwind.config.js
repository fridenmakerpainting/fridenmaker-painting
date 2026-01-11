/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: {
          DEFAULT: '#9E9074',
          light: '#B8AD97',
          dark: '#7D7259',
        },
        lavender: {
          DEFAULT: '#DEDAE3',
          light: '#F5F3F7',
        },
        sage: {
          DEFAULT: '#5C6B5A',
          dark: '#3D4A3B',
        },
        cream: '#FAF9F7',
        charcoal: '#2C2C2C',
        black: '#1A1A1A',
        'warm-gray': '#6B6B6B',
        // Aliases for existing component classes
        navy: '#3D4A3B',
        gold: '#9E9074',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Vollkorn', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
