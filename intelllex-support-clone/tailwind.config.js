module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'mono'],
        banner: ['Nunito', 'mono'],
        content: ['Asap', 'mono'],
      },
      screens: {
        md: '800px',
        // => @media (min-width: 800px) { ... }
      },
      colors: {
        midnight: '#1b2533',
      },
    },
  },
  plugins: [],
};
