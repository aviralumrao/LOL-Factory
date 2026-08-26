function draw() {
  const c = document.getElementById("myCanvas");
  const ctx = c.getContext("2d");
  const img = document.getElementById("spiderman");
  ctx.drawImage(img, 10, 10);
}