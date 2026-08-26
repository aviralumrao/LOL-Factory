function draw(meme) {
  const c = document.getElementById("myCanvas");
  const ctx = c.getContext("2d");
  const img = document.getElementById(meme);
  ctx.drawImage(img, 10, 10, 400, 400);
}

let toptxt = document.getElementById("top-text");

toptxt.addEventListener("input", () => {
  console.log(toptxt.value);
});

let bottomtxt = document.getElementById("bottom-text");

bottomtxt.addEventListener("input", () => {
  console.log(bottomtxt.value);
});



