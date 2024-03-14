const HexToRgb = (color: string) => {
  const hex = color.replace("#", "");
  const rgb = {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  };
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
};

export default HexToRgb;
