const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#BADASS";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 50;
context.globalCompositeOperation = "source-over";
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if (!isDrawing) return;
  //   console.log(e);
  context.strokeStyle = `hsl(${hue},100%,50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue > 360) {
    hue = 0;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));

canvas.addEventListener("mouseout", () => (isDrawing = false));
