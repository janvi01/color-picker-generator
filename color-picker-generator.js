// color-picker-generator.js

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const generateRandomColor = () =>
  `#${(Math.random().toString(16) + "000000").slice(2, 8).toUpperCase()}`;

const generatePredefinedColor = (color) => color.toUpperCase();

module.exports = {
  getRandomColor: generateRandomColor,
  getPredefinedColor: generatePredefinedColor,
};
