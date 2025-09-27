module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22C55E', // green-500
          light: '#DCFCE7', // green-100
          dark: '#16A34A', // green-600
        },
        accent: {
          DEFAULT: '#F3F4F6', // gray-100
        },
        pink: {
          100: '#FCE7F3', // light pink for backgrounds
        },
        green: {
          100: '#DCFCE7',
          500: '#22C55E',
          600: '#16A34A',
          800: '#166534',
        }
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(90deg, #FCE7F3 0%, #F3F4F6 100%)',
        'green-gradient': 'linear-gradient(90deg, #22C55E 0%, #16A34A 100%)',
      },
      animation: {
        fade: 'fadeIn 1s ease-in',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
