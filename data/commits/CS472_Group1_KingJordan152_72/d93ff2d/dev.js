// Acts as a loop that draws multiple short lines to give off the impression of drawing
function draw(e) {
  // Prevents drawing if pen isn't touching pad
  if (!painting) 
    return;

  // Gets accurate position of pen (canvas pos - offset)
  xPos = e.clientX - canvas.offsetLeft - 2;
  yPos = e.clientY - canvas.offsetTop - 2;
  pressure = e.pressure;

  // Pen visuals
  ctx.lineWidth = pressure * 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000000";

  // Actual drawing feature
  ctx.lineTo(xPos, yPos);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);

  // Used in velocity calculation
  totalDistance += Math.sqrt(Math.pow(xPos - lastX, 2) + Math.pow(yPos - lastY, 2)) * 0.0002645833; // Converted from pixels to meters
  lastX = xPos;
  lastY = yPos;
}