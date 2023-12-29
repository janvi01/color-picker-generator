# Color Picker Generator

Color Picker Generator is a simple npm package that provides a convenient API for generating random or predefined colors in different formats (HEX, RGB).

to be added - It includes a predefined color map for easy access to a variety of colors.

## Installation

Install the package using npm:

```bash
npm install color-picker-generator
```

## Usage

### Importing the Module

```javascript
const colorPickerGenerator = require("color-picker-generator");
```

### Generating Random Colors

```javascript
// Generate a random HEX color
const randomHexColor = colorPickerGenerator.generateRandomColor();
console.log("Random HEX Color:", randomHexColor);

// Generate a random RGB color , pass the argument 'rgb'
const randomRgbColor = colorPickerGenerator.generateRandomColor("rgb");
console.log("Random RGB Color:", randomRgbColor);
```

### Generating Predefined Colors

```javascript
// Generate a predefined HEX color, pass the color name as argument
const predefinedHexColor = colorPickerGenerator.generatePredefinedColor("blue");

// Generate a predefined RGB color, pass the color name and 'rgb' as argument
const predefinedRgbColor = colorPickerGenerator.generatePredefinedColor(
  "green",
  "rgb"
);
```

> The **color-picker-generator** npm package can be used to generate random or predefined colors for dynamic styling in web applications in your JavaScript code.
