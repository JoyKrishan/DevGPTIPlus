// Acts as a loop that draws multiple short lines to give off the impression of drawing.
  // Prevents the user from drawing if pen isn't touching pad.
  if (!painting) return;
  // Destructure data from the event object and calculate offsets.
  const { clientX, clientY, pressure } = e;
  const offsetX = canvas.offsetLeft + 2;
  const offsetY = canvas.offsetTop + 2;
  // Gets accurate position of pen.
  const xPos = clientX - offsetX;
  const yPos = clientY - offsetY;

  // Set the visual data for the pen stroke.
  // Draw the line.
  // Calculate the total distance travelled (will be used in velocity calculation).
  totalDistance += Math.hypot(xPos - lastX, yPos - lastY) * 0.0002645833;