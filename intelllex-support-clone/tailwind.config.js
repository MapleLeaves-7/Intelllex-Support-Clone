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
        'dark-gray': '#454d57',
        'light-gray': '#bebebe',
        'off-white': '#f7f7f7',
        'hover-color': 'rgba(173,202,221,.2)',
      },
    },
  },
  plugins: [],
};
