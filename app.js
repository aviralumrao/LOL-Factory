const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

function draw(meme) {
  const img = document.getElementById(meme);
  ctx.drawImage(img, 10, 10, 400, 400);
}

let toptxt = document.getElementById("top-text");

toptxt.addEventListener("input", () => {
  console.log(toptxt.value);
  ctx.font = "20px Georgia white";
  ctx.textAlign = "center";
  ctx.fillText(toptxt.value, 200, 100);
});

let bottomtxt = document.getElementById("bottom-text");

bottomtxt.addEventListener("input", () => {
  console.log(bottomtxt.value);
  ctx.font = "20px Georgia white";
  ctx.textAlign = "center";
  ctx.fillText(bottomtxt.value, 200, 300);
});
