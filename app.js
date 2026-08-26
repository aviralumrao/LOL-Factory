function draw(meme) {
  const c = document.getElementById("myCanvas");
  const ctx = c.getContext("2d");
  const img = document.getElementById(meme);
  ctx.drawImage(img, 10, 10);
}