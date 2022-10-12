let but = document.querySelector("button");
let bodyStyle = document.querySelector("body");

but.addEventListener("click", function () {
  but.classList.toggle("button-night");
  body.classList.toggle("body-night");
});
