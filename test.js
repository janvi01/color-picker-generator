const colorPickerGenerator = require("color-picker-generator");

// Generate a random HEX color
const randomHexColor = colorPickerGenerator.generateRandomColor();
console.log("Random HEX Color:", randomHexColor);

// Generate a random RGB color
const randomRgbColor = colorPickerGenerator.generateRandomColor("rgb");
console.log("Random RGB Color:", randomRgbColor);

// Generate a predefined HEX color
const predefinedHexColor = colorPickerGenerator.generatePredefinedColor("blue");
console.log("Predefined HEX Color:", predefinedHexColor);

// Generate a predefined RGB color
const predefinedRgbColor = colorPickerGenerator.generatePredefinedColor(
  "green",
  "rgb"
);
console.log("Predefined RGB Color:", predefinedRgbColor);
