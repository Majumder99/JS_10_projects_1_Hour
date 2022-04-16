const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
let id = 0;

function run() {
  id++;
  if (id > img.length - 1) {
    id = 0;
  }
  imgs.style.transform = `translateX(${-id * 500}px)`;
}

setInterval(run, 2000);
