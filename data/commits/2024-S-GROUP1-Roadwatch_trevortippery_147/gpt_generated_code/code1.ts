function generateRandomColor(): string {
  // Generate random R, G, and B values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert to hex format
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  // Construct hex color string
  const hexColor = `#${hexR}${hexG}${hexB}`;

  return hexColor;
}

// Example usage
const randomColor = generateRandomColor();
console.log(randomColor); // Output: e.g., "#1a2b3c"