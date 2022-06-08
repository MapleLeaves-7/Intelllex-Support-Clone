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
        sm: '576px',
        md: '800px',
        // => @media (min-width: 800px) { ... }
        lg: '992px',
        xl: '1200px',
      },
      colors: {
        midnight: '#1b2533',
        'dark-gray': '#454d57',
        'light-gray': '#bebebe',
        'off-white': '#f7f7f7',
        'hover-color': 'rgba(173,202,221,.2)',
        'green-label': '#2acb97',
        'purple-label': '#6031e1',
        'grey-label': '#828da6',
      },
    },
  },
  plugins: [],
};
