/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'hero-image-intro': 'hero-image-intro 1.5s ease-in-out',
        'hero-text-intro': 'hero-text-intro 1.5s ease-in-out',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'hero-image-intro': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '100%': {
            opacity: '1',
          },
        },
        'hero-text-intro': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100px)',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
