let img = document.querySelector("#magia img");
img.addEventListener("mouseover", function () {
  this.style.display = "none";
});
img.addEventListener("mouseout", function () {
  this.style.display = "block";
});
