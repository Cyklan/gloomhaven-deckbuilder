module.exports = {
  content: [
    "pages/**/*.tsx",
    "cards/**/*.tsx",
    "components/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black"]
  }
}
