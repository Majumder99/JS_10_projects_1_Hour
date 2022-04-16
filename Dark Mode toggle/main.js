const toggle = document.getElementById("toggle");
console.log(2);
toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
  // console.log(e);
});
