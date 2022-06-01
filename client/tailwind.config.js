module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [
    require("daisyui")],
}