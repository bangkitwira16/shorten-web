/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'boost-device-md': "url('/assets/images/boost-vector.svg')",
        'boost-device-xs': "url('/assets/images/boost-vector-mobile.svg')",
        'bottom-boost-md': "url('/assets/images/bottom-boost.svg')",
        'bottom-boost-xs': "url('/assets/images/bottom-boost-mobile.svg')"
      })
    }
  },
  plugins: [],
}

