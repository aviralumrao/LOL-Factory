const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

function draw(meme) {
  const img = document.getElementById(meme);
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(img, 0, 0, 400, 400);
}

let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let toptxt = document.getElementById("top-text");
  let bottomtxt = document.getElementById("bottom-text");
  console.log(toptxt.value);
  console.log(bottomtxt.value);
  ctx.font = "20px Georgia";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(toptxt.value, 200, 100);
  ctx.fillText(bottomtxt.value, 200, 300);
});

function clearCanvas() {
  ctx.clearRect(0, 0, 400, 400);
}
