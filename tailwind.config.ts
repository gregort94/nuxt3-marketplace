import colorsObj from 'tailwindcss/colors'
const colors = Object.keys(colorsObj)

module.exports = {
  darkMode: 'class',
  safelist: colors
    .map((color) => [`bg-${color}-500`, `!bg-${color}-500`])
    .flat(),
}
