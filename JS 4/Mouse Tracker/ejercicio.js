let img = document.querySelector("img");
document.body.addEventListener("mousemove", function (info) {
  img.style.top = info.clientY + "px";
  img.style.left = info.clientX + "px";
});
