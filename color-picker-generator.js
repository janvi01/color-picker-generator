function generateRandomColor(format = "hex") {
  const isValidFormat = ["hex", "rgb"].includes(format.toLowerCase());

  if (!isValidFormat) {
    throw new Error(
      'Invalid color format. Supported formats are "hex" and "rgb".'
    );
  }

  if (format.toLowerCase() === "hex") {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } else {
    return {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };
  }
}

function generatePredefinedColor(colorName, format = "hex") {
  const colorMap = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    yellow: "#FFFF00",
    purple: "#800080",
    orange: "#FFA500",
  };

  const normalizedColorName = colorName.toLowerCase();
  const isValidColor = Object.keys(colorMap).includes(normalizedColorName);

  if (!isValidColor) {
    throw new Error(
      `Invalid color name. Supported color names are: ${Object.keys(
        colorMap
      ).join(", ")}.`
    );
  }

  return format.toLowerCase() === "hex"
    ? colorMap[normalizedColorName]
    : hexToRgb(colorMap[normalizedColorName]);
}

function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

module.exports = {
  generateRandomColor,
  generatePredefinedColor,
};
