const changeBg = document.getElementById("changeBg");

changeBg.addEventListener("click", changeBackground);

function changeBackground(e) {
  e.preventDefault();
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${red}, ${green} ,${blue})`;
}
