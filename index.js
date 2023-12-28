// index.js

const colorPickerGenerator = require("./color-picker-generator");

module.exports = {
  getRandomColor: colorPickerGenerator.getRandomColor,
  getPredefinedColor: colorPickerGenerator.getPredefinedColor,
};
