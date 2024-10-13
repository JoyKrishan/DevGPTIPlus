  const PIXEL_TO_METER_SCALAR = 0.0002645833;
  totalDistance += Math.hypot(xPos - lastX, yPos - lastY) * PIXEL_TO_METER_SCALAR; 