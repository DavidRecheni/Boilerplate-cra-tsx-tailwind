module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '2xs': '12.5rem /*200px*/',
      },
    },
  },
  plugins: [
    /* eslint-disable global-require */
    require('@tailwindcss/forms'),
    /* eslint-enable global-require */
  ],
}
