module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: colors.white,
        gray: colors.trueGray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
