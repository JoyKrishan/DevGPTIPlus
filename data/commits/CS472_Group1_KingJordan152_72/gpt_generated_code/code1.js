function draw(e) {
    if (!painting) return;

    const { clientX, clientY, pressure } = e;
    const offsetX = canvas.offsetLeft + 2;
    const offsetY = canvas.offsetTop + 2;

    const xPos = clientX - offsetX;
    const yPos = clientY - offsetY;

    ctx.lineWidth = pressure * 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000000";

    ctx.lineTo(xPos, yPos);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xPos, yPos);

    totalDistance += Math.hypot(xPos - lastX, yPos - lastY) * 0.0002645833;
    lastX = xPos;
    lastY = yPos;
}